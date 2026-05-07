create table if not exists public.email_subscribers (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text not null,
  email text not null,
  source text not null default 'free-resource' check (source in ('free-resource', 'newsletter', 'other')),
  subscribed_at timestamptz not null default timezone('utc', now())
);

create unique index if not exists email_subscribers_email_idx
  on public.email_subscribers (email);

create index if not exists email_subscribers_subscribed_at_idx
  on public.email_subscribers (subscribed_at desc);

alter table public.email_subscribers enable row level security;

drop policy if exists "Anyone can subscribe" on public.email_subscribers;
create policy "Anyone can subscribe"
  on public.email_subscribers
  for insert
  with check (true);
