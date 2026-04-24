<template>
  <section id="events" class="events">
    <div class="container">
      <div class="section-header">
        <div class="section-label">What We Do</div>
        <h2 class="section-title">Our <span class="orange">Signature Events</span></h2>
        <p class="section-sub">We transform athletic competition into community impact — every match played means more for the causes we care about.</p>
      </div>

      <div class="event-feature">
        <div class="event-badge">Featured Event</div>
        <div class="event-content">
          <div class="event-left">
            <div class="event-icon-large">🏓</div>
            <h3>Pickleball Charity Tournament</h3>
            <p class="event-desc">
              Our flagship event brings the community together for an afternoon of competition,
              camaraderie, and giving back. Teams compete in a structured bracket format for a
              chance to win — and to direct proceeds to a local charity of their choice.
            </p>

            <div class="event-details">
              <div v-for="detail in eventDetails" :key="detail.label" class="detail-row">
                <span class="detail-icon">{{ detail.icon }}</span>
                <div>
                  <span class="detail-label">{{ detail.label }}</span>
                  <span class="detail-value">{{ detail.value }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="event-right">
            <div class="bracket-visual">
              <div class="bracket-title">Tournament Format</div>
              <div class="bracket-rounds">
                <div class="round">
                  <div class="round-label">Round 1</div>
                  <div class="match-pair">
                    <div class="match-slot">Team A</div>
                    <div class="vs">vs</div>
                    <div class="match-slot">Team B</div>
                  </div>
                  <div class="match-pair">
                    <div class="match-slot">Team C</div>
                    <div class="vs">vs</div>
                    <div class="match-slot">Team D</div>
                  </div>
                </div>
                <div class="bracket-arrow">›</div>
                <div class="round">
                  <div class="round-label">Finals</div>
                  <div class="match-pair finals">
                    <div class="match-slot winner">Winner 1</div>
                    <div class="vs">vs</div>
                    <div class="match-slot winner">Winner 2</div>
                  </div>
                </div>
                <div class="bracket-arrow">›</div>
                <div class="trophy">
                  <div>🏆</div>
                  <div class="trophy-text">$100<br/>Gift Card</div>
                </div>
              </div>
            </div>

            <div class="charity-flow">
              <div class="flow-icon">❤️</div>
              <div class="flow-text">
                <strong>Winners choose the charity</strong>
                <span>Proceeds go directly to a local cause they believe in</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="logistics-grid">
        <div v-for="item in logistics" :key="item.title" class="logistics-card">
          <div class="logistics-icon">{{ item.icon }}</div>
          <h4>{{ item.title }}</h4>
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const eventDetails = [
  { icon: '⏰', label: 'Time', value: '4:00 PM – 7:00 PM' },
  { icon: '💵', label: 'Entry Fee', value: '$5 per person' },
  { icon: '👥', label: 'Team Size', value: 'Up to 4 players (doubles + subs)' },
  { icon: '🎁', label: 'Prize', value: '$100 gift card for winning team' },
  { icon: '📍', label: 'Location', value: 'Peoria, Illinois' },
]

const logistics = [
  { icon: '🎪', title: 'Court Setup', desc: 'Full pickleball court setup with nets, marked boundaries, and equipment provided for all participants.' },
  { icon: '🍿', title: 'Food & Refreshments', desc: 'Cotton candy, popcorn, and cookies available — keeping energy high throughout the tournament.' },
  { icon: '🧃', title: 'Volunteer Teams', desc: 'Dedicated volunteer coordinators managing supplies, coolers, ice, sanitizer, and player logistics.' },
  { icon: '📋', title: 'Bracket Management', desc: 'Live bracket tracking and real-time adjustments to handle scheduling changes and ensure fair play.' },
]
</script>

<style scoped>
.events {
  padding: 100px 24px;
  background: var(--cream);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
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

.section-sub {
  color: var(--text-mid);
  font-size: 1.05rem;
  max-width: 540px;
  margin: 0 auto;
  line-height: 1.7;
}

.event-feature {
  background: var(--white);
  border-radius: 28px;
  padding: 48px;
  margin-bottom: 40px;
  position: relative;
  border: 1.5px solid var(--cream-dark);
  box-shadow: 0 8px 40px rgba(0,0,0,0.06);
}

.event-badge {
  position: absolute;
  top: -14px;
  left: 40px;
  background: var(--orange);
  color: var(--white);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 6px 18px;
  border-radius: 50px;
}

.event-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
}

.event-icon-large {
  font-size: 3rem;
  margin-bottom: 12px;
}

.event-left h3 {
  font-size: 1.7rem;
  font-weight: 900;
  color: var(--text-dark);
  margin-bottom: 16px;
}

.event-desc {
  color: var(--text-mid);
  line-height: 1.75;
  margin-bottom: 28px;
}

.event-details {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.detail-row {
  display: flex;
  align-items: flex-start;
  gap: 14px;
}

.detail-icon {
  font-size: 1.1rem;
  width: 28px;
  flex-shrink: 0;
  margin-top: 1px;
}

.detail-label {
  font-weight: 700;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--text-light);
  display: block;
  line-height: 1;
  margin-bottom: 3px;
}

.detail-value {
  font-size: 0.97rem;
  color: var(--text-dark);
  font-weight: 500;
}

.bracket-visual {
  background: var(--cream);
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 20px;
}

.bracket-title {
  font-weight: 700;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--text-light);
  margin-bottom: 20px;
}

.bracket-rounds {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.round { display: flex; flex-direction: column; gap: 10px; }
.round-label {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--text-light);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 4px;
}

.match-pair {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.match-slot {
  background: var(--white);
  border: 1.5px solid var(--cream-dark);
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-mid);
  white-space: nowrap;
}

.match-slot.winner {
  border-color: var(--orange);
  background: rgba(247, 148, 29, 0.08);
  color: var(--orange-dark);
}

.vs {
  font-size: 0.7rem;
  color: var(--text-light);
  font-weight: 700;
  text-align: center;
}

.bracket-arrow {
  font-size: 1.5rem;
  color: var(--orange);
  font-weight: 700;
}

.trophy {
  text-align: center;
}

.trophy > div:first-child { font-size: 2rem; }
.trophy-text {
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--green);
  line-height: 1.3;
  margin-top: 4px;
}

.charity-flow {
  display: flex;
  align-items: center;
  gap: 16px;
  background: linear-gradient(135deg, #f0faf4, #e8f5ec);
  border: 1.5px solid rgba(26, 107, 53, 0.2);
  border-radius: 14px;
  padding: 18px 20px;
}

.flow-icon { font-size: 1.8rem; flex-shrink: 0; }
.flow-text { display: flex; flex-direction: column; gap: 4px; }
.flow-text strong { font-size: 0.95rem; color: var(--green); }
.flow-text span { font-size: 0.85rem; color: var(--text-mid); }

.logistics-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.logistics-card {
  background: var(--white);
  border-radius: 16px;
  padding: 28px 24px;
  border: 1.5px solid var(--cream-dark);
  transition: transform 0.2s, box-shadow 0.2s;
}

.logistics-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
}

.logistics-icon {
  font-size: 2rem;
  margin-bottom: 12px;
}

.logistics-card h4 {
  font-size: 1rem;
  font-weight: 800;
  margin-bottom: 8px;
  color: var(--text-dark);
}

.logistics-card p {
  font-size: 0.875rem;
  color: var(--text-mid);
  line-height: 1.65;
}

@media (max-width: 900px) {
  .event-content { grid-template-columns: 1fr; gap: 36px; }
  .logistics-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 540px) {
  .event-feature { padding: 32px 20px; }
  .logistics-grid { grid-template-columns: 1fr; }
  .bracket-rounds { gap: 8px; }
}
</style>
