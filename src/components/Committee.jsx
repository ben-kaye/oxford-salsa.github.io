import { useEffect, useState } from 'react';
import { COMMITTEE } from '../data.js';

const initials = (name) =>
  name.split(' ').map((p) => p[0]).slice(0, 2).join('');

export default function Committee() {
  const [openMember, setOpenMember] = useState(null);

  useEffect(() => {
    if (!openMember) return;
    const onEsc = (e) => { if (e.key === 'Escape') setOpenMember(null); };
    document.addEventListener('keydown', onEsc);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onEsc);
      document.body.style.overflow = prev;
    };
  }, [openMember]);

  return (
    <>
      <div className="committee">
        {COMMITTEE.map((m) => {
          const bg = `oklch(0.55 0.16 ${m.hue})`;
          const fg = `oklch(0.96 0.04 ${m.hue})`;
          return (
            <button
              key={m.name}
              type="button"
              className="member"
              onClick={() => setOpenMember(m)}
              aria-haspopup="dialog"
              aria-label={`More about ${m.name}, ${m.role}`}
            >
              <div className="avatar-frame">
                {m.photo ? (
                  <img className="avatar avatar-photo" src={m.photo} alt={m.name} loading="lazy" />
                ) : (
                  <div className="avatar" style={{ background: bg, color: fg }}>{initials(m.name)}</div>
                )}
              </div>
              <div className="info">
                <div className="name">{m.name}</div>
                <div className="role">{m.role}</div>
                <div className="contact">{m.contact}</div>
              </div>
            </button>
          );
        })}
      </div>

      {openMember && (
        <div className="modal-bg" onClick={() => setOpenMember(null)}>
          <div
            className="modal committee-modal"
            role="dialog"
            aria-modal="true"
            aria-label={openMember.name}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close" onClick={() => setOpenMember(null)} aria-label="Close">✕</button>

            {openMember.photo ? (
              <img className="committee-modal-photo" src={openMember.photo} alt={openMember.name} />
            ) : (
              <div
                className="committee-modal-photo committee-modal-avatar"
                style={{
                  background: `oklch(0.55 0.16 ${openMember.hue})`,
                  color: `oklch(0.96 0.04 ${openMember.hue})`,
                }}
              >
                {initials(openMember.name)}
              </div>
            )}

            <h3>{openMember.name}</h3>

            <div className="modal-meta">
              <div>
                <div className="lbl">Role</div>
                <div className="val">{openMember.role}</div>
              </div>
              <div>
                <div className="lbl">Contact</div>
                <div className="val">{openMember.contact}</div>
              </div>
            </div>

            {openMember.bio && <p>{openMember.bio}</p>}
          </div>
        </div>
      )}
    </>
  );
}
