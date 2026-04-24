<template>
  <section id="get-involved" class="get-involved">
    <div class="container">
      <div class="section-header">
        <div class="section-label">Join Us</div>
        <h2 class="section-title">Be Part of <span class="orange">Something Bigger</span></h2>
        <p>Whether you're a student, athlete, or community member — there's a place for you at PIYC.</p>
      </div>

      <div class="ways-grid">
        <div v-for="way in ways" :key="way.title" class="way-card" :class="way.accent">
          <div class="way-icon">{{ way.icon }}</div>
          <h3>{{ way.title }}</h3>
          <p>{{ way.desc }}</p>
          <a href="mailto:piyc@example.com" class="way-btn">{{ way.cta }}</a>
        </div>
      </div>

      <div class="contact-banner">
        <div class="contact-text">
          <h3>Ready to connect?</h3>
          <p>Reach out to learn more about membership, upcoming events, or partnership opportunities.</p>
        </div>
        <div class="contact-actions">
          <a href="mailto:piyc@example.com" class="btn-contact-primary">
            ✉ Contact PIYC
          </a>
          <a href="mailto:piyc@example.com" class="btn-contact-secondary">
            Learn More
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const ways = [
  {
    icon: '🙋',
    title: 'Become a Member',
    desc: 'Join our 50+ member coalition and help shape events, volunteer, and lead initiatives that make Peoria better.',
    cta: 'Join Now',
    accent: 'accent-orange',
  },
  {
    icon: '🙌',
    title: 'Volunteer',
    desc: 'Help us run tournaments, manage logistics, coordinate food and supplies, or handle bracket management on event day.',
    cta: 'Volunteer',
    accent: 'accent-green',
  },
  {
    icon: '🤝',
    title: 'Partner With Us',
    desc: 'Organizations and businesses interested in sponsoring events or collaborating on charitable initiatives are welcome.',
    cta: 'Partner',
    accent: 'accent-cream',
  },
]
</script>

<style scoped>
.get-involved {
  padding: 100px 24px;
  background: var(--cream);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 56px;
}

.section-label {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--orange);
  margin-bottom: 12px;
}

.section-title {
  font-size: clamp(2rem, 3vw, 2.8rem);
  font-weight: 900;
  margin-bottom: 16px;
  color: var(--text-dark);
}

.orange { color: var(--orange); }

.section-header p {
  color: var(--text-mid);
  font-size: 1.05rem;
  max-width: 480px;
  margin: 0 auto;
  line-height: 1.7;
}

.ways-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 40px;
}

.way-card {
  background: var(--white);
  border-radius: 24px;
  padding: 40px 32px;
  border: 1.5px solid var(--cream-dark);
  text-align: center;
  transition: transform 0.25s, box-shadow 0.25s;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.way-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(0,0,0,0.09);
}

.way-icon {
  font-size: 3rem;
  margin-bottom: 16px;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
}

.accent-orange .way-icon {
  background: rgba(247, 148, 29, 0.12);
}

.accent-green .way-icon {
  background: rgba(26, 107, 53, 0.1);
}

.accent-cream .way-icon {
  background: var(--cream);
}

.way-card h3 {
  font-size: 1.2rem;
  font-weight: 800;
  margin-bottom: 12px;
  color: var(--text-dark);
}

.way-card p {
  color: var(--text-mid);
  line-height: 1.7;
  font-size: 0.93rem;
  margin-bottom: 24px;
  flex: 1;
}

.way-btn {
  padding: 11px 28px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.9rem;
  transition: all 0.2s;
  display: inline-block;
}

.accent-orange .way-btn {
  background: var(--orange);
  color: var(--white);
}
.accent-orange .way-btn:hover { background: var(--orange-dark); }

.accent-green .way-btn {
  background: var(--green);
  color: var(--white);
}
.accent-green .way-btn:hover { background: var(--green-dark); }

.accent-cream .way-btn {
  background: var(--cream);
  color: var(--text-dark);
  border: 1.5px solid var(--cream-dark);
}
.accent-cream .way-btn:hover { background: var(--cream-dark); }

.contact-banner {
  background: var(--white);
  border-radius: 24px;
  padding: 44px 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  border: 1.5px solid var(--cream-dark);
  box-shadow: 0 4px 24px rgba(0,0,0,0.05);
}

.contact-text h3 {
  font-size: 1.4rem;
  font-weight: 900;
  margin-bottom: 8px;
  color: var(--text-dark);
}

.contact-text p {
  color: var(--text-mid);
  line-height: 1.6;
  max-width: 420px;
}

.contact-actions {
  display: flex;
  gap: 14px;
  flex-shrink: 0;
}

.btn-contact-primary {
  background: var(--orange);
  color: var(--white);
  padding: 13px 28px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.95rem;
  transition: all 0.2s;
  white-space: nowrap;
}
.btn-contact-primary:hover { background: var(--orange-dark); transform: translateY(-1px); }

.btn-contact-secondary {
  background: transparent;
  color: var(--green);
  padding: 13px 28px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.95rem;
  border: 2px solid var(--green);
  transition: all 0.2s;
  white-space: nowrap;
}
.btn-contact-secondary:hover { background: var(--green); color: var(--white); }

@media (max-width: 900px) {
  .ways-grid { grid-template-columns: 1fr; }
  .contact-banner { flex-direction: column; text-align: center; padding: 36px 24px; }
  .contact-actions { justify-content: center; }
  .contact-text p { max-width: 100%; }
}
</style>
