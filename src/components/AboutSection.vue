<template>
  <section id="about" class="about">
    <div class="container">
      <div class="about-grid">
        <div class="about-text">
          <div class="section-label">Who We Are</div>
          <h2 class="section-title">A Nonprofit Built <span class="orange">From the Ground Up</span></h2>
          <p>
            The Peoria Indian Youth Coalition (PIYC) is a youth-led nonprofit organization
            in Peoria, Illinois, founded with a single purpose: to make a tangible difference
            in our community through organized events, charitable giving, and the spirit of
            togetherness.
          </p>
          <p>
            What started as a vision has grown into a 50+ member strong coalition of dedicated
            young leaders who believe that community engagement is the foundation of lasting change.
            We organize, manage, and execute events that bring people together — and funnel the
            proceeds into causes that matter.
          </p>
          <div class="about-values">
            <div v-for="val in values" :key="val.label" class="value-chip">
              <span class="chip-icon">{{ val.icon }}</span>
              {{ val.label }}
            </div>
          </div>
        </div>

        <div class="about-cards">
          <div class="info-card card-orange">
            <div class="card-icon">🤝</div>
            <h3>Our Mission</h3>
            <p>To empower the Indian-American youth of Peoria by creating community-driven events that raise funds for local charities while building leadership and civic responsibility.</p>
          </div>
          <div class="info-card card-green">
            <div class="card-icon">🌱</div>
            <h3>Our Vision</h3>
            <p>A Peoria where youth organizations are at the forefront of community development — building bridges between generations, cultures, and causes.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const values = [
  { icon: '🎯', label: 'Community First' },
  { icon: '🏆', label: 'Excellence' },
  { icon: '❤️', label: 'Charity Driven' },
  { icon: '⚡', label: 'Youth Led' },
]
</script>

<style scoped>
.about {
  padding: 100px 24px;
  background: var(--white);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
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
  line-height: 1.15;
  margin-bottom: 24px;
  color: var(--text-dark);
}

.orange { color: var(--orange); }

.about-text p {
  color: var(--text-mid);
  line-height: 1.8;
  margin-bottom: 16px;
  font-size: 1.02rem;
}

.about-values {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 28px;
}

.value-chip {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--cream);
  border: 1.5px solid var(--cream-dark);
  padding: 8px 16px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.88rem;
  color: var(--text-dark);
}

.chip-icon { font-size: 1rem; }

.about-cards {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info-card {
  padding: 32px;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
}

.info-card::before {
  content: '';
  position: absolute;
  top: -30px;
  right: -30px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  opacity: 0.15;
}

.card-orange {
  background: linear-gradient(135deg, #fff8ef 0%, #fff3e0 100%);
  border: 1.5px solid rgba(247, 148, 29, 0.2);
}

.card-orange::before { background: var(--orange); }

.card-green {
  background: linear-gradient(135deg, #f0faf4 0%, #e8f5ec 100%);
  border: 1.5px solid rgba(26, 107, 53, 0.2);
}

.card-green::before { background: var(--green); }

.card-icon {
  font-size: 2rem;
  margin-bottom: 12px;
}

.info-card h3 {
  font-size: 1.2rem;
  font-weight: 800;
  margin-bottom: 10px;
  color: var(--text-dark);
}

.info-card p {
  color: var(--text-mid);
  line-height: 1.7;
  font-size: 0.95rem;
}

@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 48px;
  }
}
</style>
