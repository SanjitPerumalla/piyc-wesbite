<template>
  <div class="board-page">
    <NavBar />

    <div class="board-hero">
      <div class="container">
        <router-link to="/" class="back-link">← Back to Home</router-link>
        <div class="section-label">Leadership</div>
        <h1>Meet the <span class="orange">Board</span></h1>
        <p>The dedicated team behind PIYC — organizing events, leading volunteers, and driving our mission forward.</p>
      </div>
    </div>

    <div class="board-body">
      <div class="container">
        <div class="board-grid">
          <div v-for="member in board" :key="member.name" class="member-card">
            <div class="member-photo-wrap">
              <img
                v-if="member.photo"
                :src="`${base}photos/${member.photo}`"
                :alt="member.name"
                class="member-photo"
              />
              <div v-else class="member-placeholder">
                {{ initials(member.name) }}
              </div>
            </div>
            <div class="member-info">
              <h3>{{ member.name }}</h3>
              <span class="member-role">{{ member.role }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <FooterSection />
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import FooterSection from '../components/FooterSection.vue'

// Add your board members here — set photo to a path like '/photos/sanjit.jpg'
// or leave it null to show the initials placeholder
const base = import.meta.env.BASE_URL

const board = [
  { name: 'Sanjit Perumalla', role: 'Founder & President', photo: null },
  { name: 'Hariom Thaker', role: 'Vice President', photo: 'hariom.jpg' },
  { name: 'Darsh Chivukula', role: 'Communications Director', photo: 'darsh.jpg' },
  { name: 'Aariz Khan', role: 'Communications Associate', photo: 'aariz.jpg' },
  { name: 'Soumik Veeravali', role: 'Secretary', photo: 'soumik.jpg' },
  { name: 'Neha Salimath', role: 'Social Media Co-Director', photo: 'neha.jpg' },
  { name: 'Tasha Furtado', role: 'Treasurer', photo: 'tasha.jpg' },
  { name: 'Akshith Narava', role: 'Board Member', photo: 'akshith.jpg' },
  { name: 'Board Member', role: 'Member', photo: null },
  { name: 'Board Member', role: 'Member', photo: null },
  { name: 'Board Member', role: 'Member', photo: null },
  { name: 'Board Member', role: 'Member', photo: null },
]

function initials(name) {
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
}
</script>

<style scoped>
.board-page {
  min-height: 100vh;
  background: var(--cream);
}

.board-hero {
  background: linear-gradient(135deg, var(--green) 0%, var(--green-dark) 100%);
  padding: 120px 24px 64px;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

.back-link {
  display: inline-block;
  color: rgba(255,255,255,0.7);
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 28px;
  text-decoration: none;
  transition: color 0.2s;
}
.back-link:hover { color: var(--white); }

.section-label {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--orange-light);
  margin-bottom: 12px;
}

.board-hero h1 {
  font-size: clamp(2.4rem, 4vw, 3.5rem);
  font-weight: 900;
  color: var(--white);
  margin-bottom: 16px;
  line-height: 1.1;
}

.orange { color: var(--orange-light); }

.board-hero p {
  color: rgba(255,255,255,0.75);
  font-size: 1.05rem;
  line-height: 1.7;
  max-width: 520px;
}

.board-body {
  padding: 72px 24px 100px;
}

.board-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.member-card {
  background: var(--white);
  border-radius: 24px;
  overflow: hidden;
  border: 1.5px solid var(--cream-dark);
  box-shadow: 0 4px 24px rgba(0,0,0,0.05);
  transition: transform 0.25s, box-shadow 0.25s;
  display: flex;
  flex-direction: column;
}

.member-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(0,0,0,0.1);
}

.member-photo-wrap {
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  background: var(--cream);
}

.member-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}

.member-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 3rem;
  font-weight: 900;
  color: var(--white);
  background: linear-gradient(135deg, var(--orange) 0%, var(--orange-dark) 100%);
}

.member-card:nth-child(even) .member-placeholder {
  background: linear-gradient(135deg, var(--green) 0%, var(--green-dark) 100%);
}

.member-info {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.member-info h3 {
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--text-dark);
}

.member-role {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--orange);
  text-transform: uppercase;
  letter-spacing: 0.8px;
}

@media (max-width: 900px) {
  .board-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 540px) {
  .board-grid { grid-template-columns: 1fr; }
}
</style>
