# Supabase Kurulum Notlari

## 1. Projeyi bagla
```bash
supabase login
supabase link --project-ref YOUR_PROJECT_REF
```

## 2. Veritabani migration'ini uygula
```bash
supabase db push
```

## 3. Function secret'lerini tanimla
```bash
supabase secrets set ADMIN_PANEL_PASSWORD="guclu-bir-panel-sifresi"
supabase secrets set ADMIN_SESSION_SECRET="uzun-rastgele-bir-imza-anahtari"
```

`SUPABASE_URL` ve `SUPABASE_SERVICE_ROLE_KEY` Supabase tarafinda otomatik gelir. Ortaminda gelmiyorsa ayni sekilde secret olarak tanimla.

## 4. Function'lari deploy et
```bash
supabase functions deploy admin-login
supabase functions deploy admin-blog-list
supabase functions deploy admin-blog-upsert
supabase functions deploy admin-blog-delete
supabase functions deploy admin-media-upload-url
```

## 5. Frontend env dosyasini doldur
`.env.example` icindeki degiskenleri `.env` dosyana tasiyip Supabase projenin public URL ve anon key bilgileriyle doldur.
