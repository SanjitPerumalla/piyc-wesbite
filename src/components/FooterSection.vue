<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <div class="footer-logo">
            <PiycLogo :size="52" />
            <div>
              <div class="brand-name"><span class="orange">PIYC</span></div>
              <div class="brand-sub">Peoria Indian Youth Coalition</div>
            </div>
          </div>
          <p class="footer-tagline">
            Building community through sport, service, and shared purpose — right here in Peoria, Illinois.
          </p>
        </div>

        <div class="footer-links">
          <div class="link-group">
            <h4>Organization</h4>
            <a href="#about">About PIYC</a>
            <a href="#impact">Our Impact</a>
            <a href="#events">Events</a>
          </div>
          <div class="link-group">
            <h4>Get Involved</h4>
            <a href="#get-involved">Join as Member</a>
            <a href="#get-involved">Volunteer</a>
            <a href="#get-involved">Partner With Us</a>
          </div>
          <div class="link-group">
            <h4>Contact</h4>
            <a href="mailto:piyc@example.com">piyc@example.com</a>
            <span class="footer-location">📍 Peoria, Illinois</span>
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
import PiycLogo from './PiycLogo.vue'
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

.footer-logo {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 20px;
}

.brand-name {
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: 1.6rem;
}

.orange { color: var(--orange); }

.brand-sub {
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 500;
  letter-spacing: 0.3px;
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
  border-radius: 50px;
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
