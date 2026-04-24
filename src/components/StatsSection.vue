<template>
  <section class="stats">
    <div class="container">
      <div class="stats-grid">
        <div v-for="stat in stats" :key="stat.label" class="stat-card">
          <div class="stat-icon">{{ stat.icon }}</div>
          <div class="stat-number">
            <AnimatedCounter :target="stat.value" :suffix="stat.suffix" />
          </div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AnimatedCounter from './AnimatedCounter.vue'

const stats = [
  { icon: '👥', value: 50, suffix: '+', label: 'Active Members' },
  { icon: '🏓', value: 1, suffix: '', label: 'Charity Tournaments Hosted' },
  { icon: '💰', value: 100, suffix: '+', label: 'Dollars Raised for Charity' },
  { icon: '🤝', value: 1, suffix: '', label: 'Local Charities Supported' },
]
</script>

<style scoped>
.stats {
  padding: 80px 24px;
  background: linear-gradient(135deg, var(--green) 0%, var(--green-dark) 100%);
  position: relative;
  overflow: hidden;
}

.stats::before {
  content: '';
  position: absolute;
  top: -60px;
  right: -60px;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: rgba(247, 148, 29, 0.15);
}

.stats::after {
  content: '';
  position: absolute;
  bottom: -80px;
  left: -40px;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.stat-card {
  text-align: center;
  padding: 36px 20px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-4px);
}

.stat-icon {
  font-size: 2.2rem;
  margin-bottom: 12px;
}

.stat-number {
  font-family: 'Montserrat', sans-serif;
  font-size: 3rem;
  font-weight: 900;
  color: var(--orange-light);
  line-height: 1;
  margin-bottom: 8px;
}

.stat-label {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 1.3;
}

@media (max-width: 768px) {
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 420px) {
  .stats-grid { grid-template-columns: 1fr; }
}
</style>
