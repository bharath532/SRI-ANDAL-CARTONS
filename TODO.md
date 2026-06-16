# TODO - Sri Andal Cartons Website

## Plan Implementation Steps
1. Create project scaffolding: `client/` (React) and `server/` (Express).
2. Implement MongoDB connection and Mongoose models (`ContactInquiry`, `GalleryImage`, `AdminUser`).
3. Build backend APIs:
   - `POST /api/contact` to save inquiries
   - `POST /api/auth/admin/login` (JWT)
   - `GET /api/admin/inquiries`
   - `DELETE /api/admin/inquiries/:id`
   - `POST /api/admin/gallery/upload` (multer)
   - `GET /api/gallery/images`
4. Implement frontend:
   - React Router pages: Home/About/Products/Gallery/Contact
   - Admin Dashboard (login + inquiries + upload + totals)
   - Contact form: WhatsApp deep-link + email + API save
5. Styling & UI:
   - Bootstrap 5 layout, responsive navbar (sticky), footer
   - Industrial theme (blue/yellow) + custom CSS
   - Floating WhatsApp button, scroll-to-top, loading animation
   - Bootstrap carousel on Home
6. SEO:
   - React Helmet meta tags per page
7. Environment variables:
   - `client/.env` and `server/.env` examples
8. Add root `README.md` with installation and deployment guide:
   - Vercel for frontend
   - Render for backend
9. Run local tests/build:
   - `npm install`/`npm run build` for client
   - `npm run dev` for server

## Done
- (will populate as steps complete)

