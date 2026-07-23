<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <div class="footer-logo">
            <img src="/piyc-logo.png" alt="PIYC Logo" class="footer-logo-img" />
          </div>
          <p class="footer-tagline">
            Building community through sport, service, and shared purpose right here in Peoria, Illinois.
          </p>
        </div>

        <div class="footer-links">
          <div class="link-group">
            <h4>Organization</h4>
            <a href="/#about">About PIYC</a>
            <a href="/#impact">Our Impact</a>
            <a href="/#events">Events</a>
          </div>
          <div class="link-group">
            <h4>Get Involved</h4>
            <router-link to="/join">Join as Member</router-link>
            <router-link to="/join">Volunteer</router-link>
            <router-link to="/join">Partner With Us</router-link>
          </div>
          <div class="link-group">
            <h4>Contact</h4>
            <a href="mailto:piyc@example.com">piyc@example.com</a>
            <span class="footer-location">Peoria, Illinois</span>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <span>© {{ year }} Peoria Indian Youth Coalition. All rights reserved.</span>
        <span class="footer-nonprofit">Nonprofit Organization</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background: var(--text-dark);
  color: rgba(255, 255, 255, 0.85);
  padding: 72px 24px 32px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-top {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 80px;
  margin-bottom: 56px;
}

.footer-logo-img {
  height: 52px;
  width: auto;
  object-fit: contain;
  margin-bottom: 20px;
  filter: brightness(0) invert(1);
  opacity: 0.85;
}

.footer-tagline {
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.75;
  font-size: 0.95rem;
  max-width: 380px;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.link-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.link-group h4 {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--orange);
  margin-bottom: 4px;
}

.link-group a {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.65);
  transition: color 0.2s;
  text-decoration: none;
}

.link-group a:hover { color: var(--white); }

.footer-location {
  font-size: 0.88rem;
  color: rgba(255, 255, 255, 0.5);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.83rem;
  color: rgba(255, 255, 255, 0.4);
}

.footer-nonprofit {
  background: rgba(247, 148, 29, 0.15);
  color: var(--orange-light);
  padding: 5px 14px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.78rem;
  letter-spacing: 0.5px;
}

@media (max-width: 900px) {
  .footer-top { grid-template-columns: 1fr; gap: 40px; }
  .footer-bottom { flex-direction: column; gap: 12px; text-align: center; }
}

@media (max-width: 540px) {
  .footer-links { grid-template-columns: 1fr 1fr; }
}
</style>
