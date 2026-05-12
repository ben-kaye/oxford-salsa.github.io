import { useEffect, useMemo, useState } from 'react';
import { TERM, TERM_CARD } from '../data.js';

const DAY_LABELS_SHORT = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const DAY_LABELS_LONG = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function parseISO(iso) {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d);
}

function addDays(date, n) {
  const d = new Date(date);
  d.setDate(d.getDate() + n);
  return d;
}

function formatWeekCommencing(date) {
  // "26 Apr" — UK short
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
}

export default function Schedule() {
  const [openDay, setOpenDay] = useState(null);

  useEffect(() => {
    if (!openDay) return;
    const onEsc = (e) => { if (e.key === 'Escape') setOpenDay(null); };
    document.addEventListener('keydown', onEsc);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onEsc);
      document.body.style.overflow = prev;
    };
  }, [openDay]);

  const { weeks, hiddenPast, termEnded } = useMemo(() => {
    const start = parseISO(TERM.startSunday);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const all = Array.from({ length: TERM.weeks }, (_, i) => {
      const sunday = addDays(start, i * 7);
      const nextSunday = addDays(sunday, 7);
      return {
        num: i + 1,
        sunday,
        label: formatWeekCommencing(sunday),
        isCurrent: today >= sunday && today < nextSunday,
        isPast: today >= nextSunday,
      };
    });
    const remaining = all.filter((w) => !w.isPast);
    return {
      weeks: remaining,
      hiddenPast: all.length - remaining.length,
      termEnded: remaining.length === 0,
    };
  }, []);

  const [selectedIdx, setSelectedIdx] = useState(0);

  // Map dayOfWeek -> event(s). Respect optional `weeks` filter on each event.
  function eventsForCell(weekNum, dayOfWeek) {
    return TERM_CARD.filter(
      (ev) =>
        ev.dayOfWeek === dayOfWeek &&
        (!Array.isArray(ev.weeks) || ev.weeks.includes(weekNum))
    );
  }

  function renderEventButton(ev, weekNum) {
    const n = ev.classes.length;
    const meta =
      ev.style === 'workshop'
        ? 'Workshop'
        : ev.style === 'partner'
          ? 'Partner event'
          : `${n} ${n === 1 ? 'level' : 'levels'}`;
    return (
      <button
        key={ev.id}
        type="button"
        className={`tm-event style-${ev.style}`}
        onClick={() => setOpenDay(ev)}
        aria-label={`${ev.title} — ${meta} — week ${weekNum}`}
      >
        <span className="ttl">{ev.title}</span>
        <span className="meta">{meta}</span>
      </button>
    );
  }

  const selectedWeek = weeks[selectedIdx];
  const mobileDays = selectedWeek
    ? DAY_LABELS_LONG
        .map((label, col) => ({
          label,
          col,
          events: eventsForCell(selectedWeek.num, col),
        }))
        .filter((d) => d.events.length > 0)
    : [];

  return (
    <section id="schedule" className="section shell">
      <div className="section-head">
        <div>
          <div className="num">02 — Term card</div>
        </div>
        <div>
          <h2>The <em>term</em> at a glance.</h2>
          <p className="lede" style={{ marginTop: 24 }}>
            {TERM.name} · {weeks.length} of {TERM.weeks} weeks remaining
            {hiddenPast > 0 && !termEnded ? ` (${hiddenPast} past ${hiddenPast === 1 ? 'week' : 'weeks'} hidden)` : ''}.
            {' '}{TERM.blurb} Click any class to see levels, times and booking details.
          </p>
        </div>
      </div>

      {termEnded && (
        <div className="term-ended">
          <div className="eyebrow">Term complete</div>
          <p>{TERM.name} has ended. The next term card will appear here once dates are set.</p>
        </div>
      )}

      {!termEnded && (
        <>
          {/* Mobile: one week at a time. Hidden ≥900px via CSS. */}
          <div className="term-mobile" aria-label={`${TERM.name} — week navigator`}>
            <div className="term-mobile-head">
              <button
                type="button"
                className="wk-nav"
                onClick={() => setSelectedIdx((i) => Math.max(0, i - 1))}
                disabled={selectedIdx === 0}
                aria-label="Previous week"
              >‹</button>
              <div className="wk-label" aria-live="polite">
                <span className="wk">Week {selectedWeek?.num}</span>
                <span className="wc">w/c {selectedWeek?.label}</span>
              </div>
              <button
                type="button"
                className="wk-nav"
                onClick={() => setSelectedIdx((i) => Math.min(weeks.length - 1, i + 1))}
                disabled={selectedIdx >= weeks.length - 1}
                aria-label="Next week"
              >›</button>
            </div>
            <div className="term-mobile-days">
              {mobileDays.length === 0 ? (
                <div className="term-mobile-day empty">
                  <div className="dlbl">—</div>
                  <div className="devents">No classes this week.</div>
                </div>
              ) : (
                mobileDays.map((day) => (
                  <div key={day.col} className="term-mobile-day">
                    <div className="dlbl">{DAY_LABELS_SHORT[day.col]}</div>
                    <div className="devents">
                      {day.events.map((ev) => renderEventButton(ev, selectedWeek.num))}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Desktop matrix. Hidden <900px via CSS. */}
          <div className="term-matrix">
            <div className="tm-grid" role="grid" aria-label={`${TERM.name} class matrix`}>
              {/* Header row */}
              <div className="tm-corner" role="columnheader">Week</div>
              {DAY_LABELS_SHORT.map((d) => (
                <div key={d} className="tm-day-head" role="columnheader">{d}</div>
              ))}

              {/* Week rows */}
              {weeks.map((w) => (
                <div key={w.num} className="tm-row" role="row">
                  <div className="tm-week-head" role="rowheader">
                    <div className="wk">Week {w.num}</div>
                    <div className="wc">w/c {w.label}</div>
                  </div>
                  {DAY_LABELS_SHORT.map((_, col) => {
                    const events = eventsForCell(w.num, col);
                    return (
                      <div key={col} className="tm-cell" role="gridcell">
                        {events.map((ev) => renderEventButton(ev, w.num))}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {openDay && (
        <div className="modal-bg" onClick={() => setOpenDay(null)}>
          <div className={`modal day-modal style-${openDay.style}`} onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={() => setOpenDay(null)} aria-label="Close">✕</button>
            <div className="eyebrow">{openDay.day} · {openDay.title}</div>
            <h3>{openDay.venue}</h3>
            <div className="mono day-modal-address">{openDay.address}</div>

            {openDay.booking?.note && (
              <div className="day-modal-note">{openDay.booking.note}</div>
            )}

            <div className="day-modal-classes">
              {openDay.classes.map((c) => (
                <div key={`${c.level}-${c.time}`} className="day-modal-class">
                  <div className="tm">{c.time}</div>
                  <div className="body">
                    <div className="lvl">{c.level}</div>
                    {c.description && <div className="dsc">{c.description}</div>}
                  </div>
                </div>
              ))}
            </div>

            <div className="modal-cta">
              {openDay.booking?.url ? (
                <a
                  href={openDay.booking.url}
                  target="_blank"
                  rel="noopener"
                  className="btn btn-ember"
                >{openDay.booking.label || 'Book now'}</a>
              ) : (
                <a href="#pricing" className="btn btn-ember">Become a member</a>
              )}
              <button className="btn btn-ghost" onClick={() => setOpenDay(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
