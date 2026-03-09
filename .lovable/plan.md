

# Fix Plan: Form Errors, Dialog Warning, Chatbot Restriction & Build

## 1. Recreate `.env` file
The `.env` file was deleted, which may be causing the build error. Recreate it with the Supabase credentials (already hardcoded in `client.ts`, but other parts of the code reference `import.meta.env`).

## 2. Add `name` and `autocomplete` attributes to form inputs

**Login.tsx (lines 157, 166):**
- Email input: add `name="email"` and `autocomplete="email"`
- Password input: add `name="password"` and `autocomplete="current-password"`

**Signup.tsx (lines 155, 160, 166-172, 200):**
- Name input: add `name="name"` and `autocomplete="name"`
- Email input: add `name="email"` and `autocomplete="email"`
- Password input: add `name="new-password"` and `autocomplete="new-password"`
- Confirm password input: add `name="confirmPassword"` and `autocomplete="new-password"`

**AdminLogin.tsx (lines 135, 141):**
- Email input: add `name="email"` and `autocomplete="email"`
- Password input: add `name="password"` and `autocomplete="current-password"`

**ForgotPassword.tsx:**
- Email input: add `name="email"` and `autocomplete="email"`

**LeadForm.tsx:**
- Student name input: add `name="studentName"` and `autocomplete="name"`
- Email input: add `name="email"` and `autocomplete="email"`

## 3. Fix DialogContent `aria-describedby` warning

In `src/components/ui/dialog.tsx`, add a default `aria-describedby={undefined}` to suppress the Radix warning when no description is provided. This is the standard fix.

## 4. Restrict ChatWidget to dashboard only

In `src/App.tsx` (line 196), replace `<ChatWidget />` with a wrapper component that uses `useLocation()` and only renders the chatbot on `/dashboard` and `/` routes.

## Files to modify
- `.env` (create)
- `src/pages/Login.tsx`
- `src/pages/Signup.tsx`
- `src/pages/AdminLogin.tsx`
- `src/pages/ForgotPassword.tsx`
- `src/components/Landing/LeadForm.tsx`
- `src/components/ui/dialog.tsx`
- `src/App.tsx`

