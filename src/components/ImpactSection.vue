<template>
  <section id="impact" class="impact">
    <div class="container">
      <div class="impact-intro">
        <div class="section-label">Making a Difference</div>
        <h2 class="section-title">Real <span class="orange">Community Impact</span></h2>
        <p>Every event we run, every dollar we raise, and every volunteer hour contributed goes toward building a stronger Peoria.</p>
      </div>

      <div class="impact-grid">
        <div v-for="item in impacts" :key="item.title" class="impact-card" :class="item.variant">
          <div class="impact-card-icon">{{ item.icon }}</div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
          <ul v-if="item.bullets">
            <li v-for="b in item.bullets" :key="b">{{ b }}</li>
          </ul>
        </div>
      </div>

      <div class="leadership-banner">
        <div class="banner-left">
          <h3>Youth-Led. Community-Driven.</h3>
          <p>PIYC is built and run entirely by young leaders in the Peoria area — proving that age is no barrier to making a real difference.</p>
        </div>
        <div class="banner-right">
          <div v-for="role in roles" :key="role" class="role-tag">{{ role }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const impacts = [
  {
    icon: '🏙️',
    title: 'Community Engagement',
    desc: 'Organized athletic events that bring Peoria residents together around shared goals and friendly competition.',
    bullets: [
      'Multi-team tournament structure',
      'Open to the broader community',
      'Fosters cross-cultural connection',
    ],
    variant: 'orange-card',
  },
  {
    icon: '💸',
    title: 'Charitable Giving',
    desc: 'Every tournament we host translates competitive play into real donations that go directly to local charities.',
    bullets: [
      'Winners direct proceeds to charity',
      'Transparent fund allocation',
      'Supporting Peoria-area nonprofits',
    ],
    variant: 'green-card',
  },
  {
    icon: '🎓',
    title: 'Leadership Development',
    desc: 'PIYC is a training ground for the next generation of community leaders — developing real-world skills through real-world events.',
    bullets: [
      'Event planning & management',
      'Volunteer coordination',
      'Live problem-solving & operations',
    ],
    variant: 'cream-card',
  },
]

const roles = [
  'Founder & President',
  'Event Coordinators',
  'Volunteer Leads',
  'Bracket Managers',
  'Food & Supply Teams',
]
</script>

<style scoped>
.impact {
  padding: 100px 24px;
  background: var(--white);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.impact-intro {
  text-align: center;
  margin-bottom: 60px;
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

.impact-intro p {
  color: var(--text-mid);
  font-size: 1.05rem;
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.7;
}

.impact-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 40px;
}

.impact-card {
  padding: 36px 30px;
  border-radius: 24px;
  border: 1.5px solid transparent;
  transition: transform 0.25s, box-shadow 0.25s;
}

.impact-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(0,0,0,0.1);
}

.orange-card {
  background: linear-gradient(135deg, #fff8ef 0%, #fff3e0 100%);
  border-color: rgba(247, 148, 29, 0.25);
}

.green-card {
  background: linear-gradient(135deg, #f0faf4 0%, #e8f5ec 100%);
  border-color: rgba(26, 107, 53, 0.25);
}

.cream-card {
  background: var(--cream);
  border-color: var(--cream-dark);
}

.impact-card-icon {
  font-size: 2.5rem;
  margin-bottom: 16px;
}

.impact-card h3 {
  font-size: 1.25rem;
  font-weight: 800;
  margin-bottom: 12px;
  color: var(--text-dark);
}

.impact-card p {
  color: var(--text-mid);
  line-height: 1.7;
  margin-bottom: 16px;
  font-size: 0.95rem;
}

.impact-card ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.impact-card li {
  font-size: 0.88rem;
  color: var(--text-mid);
  padding-left: 20px;
  position: relative;
}

.impact-card li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--green);
  font-weight: 700;
}

.leadership-banner {
  background: linear-gradient(135deg, var(--green) 0%, var(--green-dark) 100%);
  border-radius: 24px;
  padding: 44px 48px;
  display: flex;
  align-items: center;
  gap: 48px;
  color: var(--white);
}

.banner-left { flex: 1; }
.banner-left h3 {
  font-size: 1.5rem;
  font-weight: 900;
  margin-bottom: 10px;
  color: var(--white);
}

.banner-left p {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
  font-size: 0.97rem;
}

.banner-right {
  flex: 0 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  max-width: 360px;
}

.role-tag {
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.25);
  padding: 8px 18px;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  white-space: nowrap;
}

@media (max-width: 900px) {
  .impact-grid { grid-template-columns: 1fr; }
  .leadership-banner {
    flex-direction: column;
    text-align: center;
    padding: 36px 28px;
  }
  .banner-right { justify-content: center; }
}
</style>
