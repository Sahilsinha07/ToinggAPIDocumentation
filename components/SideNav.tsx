import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const items = [
  {
    title: 'Overview',
    links: [{ href: '/', children: 'Overview' }],
  },
  {
    title: 'Authorization',
    links: [{ href: '/authentication', children: 'Authentication' }],
  },
  {
    title: 'End Points',
    links: [{ href: '/endpoints', children: 'End Points' }],
  },
  {
    title: 'Schemas',
    links: [{ href: '/schema', children: 'Schemas' }],
  },

];

export function SideNav() {
  const router = useRouter();

  return (
    <nav className="sidenav">
      <ul>
        {items.map((item) => (
          <li key={item.title} className="sidenav-section">
            <span className="sidenav-section-title">{item.title}</span>
            <ul className="sidenav-links">
              {item.links.map((link) => {
                const active = router.pathname === link.href;
                return (
                  <li key={link.href} className={`sidenav-link ${active ? 'active' : ''}`}>
                    <Link {...link} />
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ul>

      <style jsx>
        {`
          .sidenav {
            position: sticky;
            top: var(--top-nav-height);
            height: calc(100vh - var(--top-nav-height));
            flex: 0 0 auto;
            overflow-y: auto;
            padding: 2.5rem 2rem 2rem;
            border-right: 1px solid var(--border-color);
            background-color: var(--background-color);
          }

          .sidenav ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .sidenav-section {
            margin-bottom: 1rem;
          }

          .sidenav-section-title {
            font-size: 1.2rem;
            font-weight: 500;
            padding: 0.5rem 0;
          }

          .sidenav-links {
            padding-left: 1rem;
          }

          .sidenav-link {
            margin-bottom: 0.5rem;
          }

          .sidenav-link a {
            text-decoration: none;
            color: var(--text-color);
          }

          .sidenav-link.active a {
            font-weight: 500;
            color: var(--primary-color);
          }
        `}
      </style>
    </nav>
  );
}