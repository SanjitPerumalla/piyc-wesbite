<template>
  <div class="join-page">
    <NavBar />

    <div class="join-hero">
      <div class="container">
        <router-link to="/" class="back-link">← Back to Home</router-link>
        <div class="hero-text">
          <div class="section-label">Get Involved</div>
          <h1>Join the <span class="orange">Coalition</span></h1>
          <p>Fill out the form below and we'll add you to our WhatsApp group and keep you updated on upcoming events.</p>
        </div>
      </div>
    </div>

    <div class="join-body">
      <div class="container">
        <div class="join-grid">

          <div class="form-card" v-if="!submitted">
            <h2>Sign Up</h2>
            <p class="form-sub">All fields are required.</p>

            <form @submit.prevent="handleSubmit" class="form">
              <div class="field">
                <label for="name">Full Name</label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div class="field">
                <label for="email">Email Address</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div class="field">
                <label for="phone">Phone Number</label>
                <input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  placeholder="(555) 000-0000"
                  required
                />
              </div>

              <div class="field">
                <label for="interest">How do you want to get involved?</label>
                <select id="interest" v-model="form.interest" required>
                  <option value="" disabled>Select an option</option>
                  <option value="member">Become a Member</option>
                  <option value="volunteer">Volunteer at Events</option>
                  <option value="partner">Partner / Sponsor</option>
                  <option value="general">General Interest</option>
                </select>
              </div>

              <div class="field">
                <label for="message">Anything else you'd like us to know? <span class="optional">(Optional)</span></label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="4"
                  placeholder="Tell us a bit about yourself..."
                ></textarea>
              </div>

              <button type="submit" class="submit-btn" :disabled="loading">
                {{ loading ? 'Submitting...' : 'Submit' }}
              </button>
            </form>
          </div>

          <div class="success-card" v-else>
            <div class="success-icon">✓</div>
            <h2>You're in!</h2>
            <p>Thanks, <strong>{{ form.name }}</strong>. We received your info and will reach out to add you to our WhatsApp group and email list shortly.</p>
            <router-link to="/" class="back-btn">Back to Home</router-link>
          </div>

          <div class="info-panel">
            <div class="info-block">
              <h3>What happens next?</h3>
              <div class="steps">
                <div class="step">
                  <div class="step-num">1</div>
                  <div>
                    <strong>We review your info</strong>
                    <span>Our team will receive your submission within 24 hours.</span>
                  </div>
                </div>
                <div class="step">
                  <div class="step-num">2</div>
                  <div>
                    <strong>WhatsApp invite</strong>
                    <span>We'll send a group invite to your phone number so you stay in the loop.</span>
                  </div>
                </div>
                <div class="step">
                  <div class="step-num">3</div>
                  <div>
                    <strong>Event updates</strong>
                    <span>You'll be added to our email list for upcoming events and announcements.</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="info-block contact-block">
              <h3>Contact Us Directly</h3>
              <div class="contact-item">
                <span class="contact-label">Email</span>
                <a href="mailto:piyc@example.com">piyc@example.com</a>
              </div>
              <div class="contact-item">
                <span class="contact-label">Phone</span>
                <a href="tel:+13095550000">(309) 555-0000</a>
              </div>
              <div class="contact-item">
                <span class="contact-label">Location</span>
                <span>Peoria, Illinois</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <FooterSection />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import NavBar from '../components/NavBar.vue'
import FooterSection from '../components/FooterSection.vue'

const submitted = ref(false)
const loading = ref(false)

const form = ref({
  name: '',
  email: '',
  phone: '',
  interest: '',
  message: '',
})

async function handleSubmit() {
  loading.value = true
  // Send to Formspree — replace YOUR_FORM_ID with your actual Formspree endpoint
  try {
    const res = await fetch('https://formspree.io/f/maqrdajg', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(form.value),
    })
    if (res.ok) {
      submitted.value = true
    } else {
      // Fallback: open mail client
      const subject = encodeURIComponent('PIYC Signup: ' + form.value.name)
      const body = encodeURIComponent(
        `Name: ${form.value.name}\nEmail: ${form.value.email}\nPhone: ${form.value.phone}\nInterest: ${form.value.interest}\nMessage: ${form.value.message}`
      )
      window.location.href = `mailto:piyc@example.com?subject=${subject}&body=${body}`
      submitted.value = true
    }
  } catch {
    const subject = encodeURIComponent('PIYC Signup: ' + form.value.name)
    const body = encodeURIComponent(
      `Name: ${form.value.name}\nEmail: ${form.value.email}\nPhone: ${form.value.phone}\nInterest: ${form.value.interest}\nMessage: ${form.value.message}`
    )
    window.location.href = `mailto:piyc@example.com?subject=${subject}&body=${body}`
    submitted.value = true
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.join-page {
  min-height: 100vh;
  background: var(--cream);
}

.join-hero {
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

.hero-text .section-label {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--orange-light);
  margin-bottom: 12px;
}

.hero-text h1 {
  font-size: clamp(2.4rem, 4vw, 3.5rem);
  font-weight: 900;
  color: var(--white);
  margin-bottom: 16px;
  line-height: 1.1;
}

.orange { color: var(--orange-light); }

.hero-text p {
  color: rgba(255,255,255,0.75);
  font-size: 1.05rem;
  line-height: 1.7;
  max-width: 520px;
}

.join-body {
  padding: 64px 24px 100px;
}

.join-grid {
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 40px;
  align-items: start;
}

.form-card, .success-card {
  background: var(--white);
  border-radius: 24px;
  padding: 48px;
  border: 1.5px solid var(--cream-dark);
  box-shadow: 0 8px 40px rgba(0,0,0,0.06);
}

.form-card h2, .success-card h2 {
  font-size: 1.6rem;
  font-weight: 900;
  color: var(--text-dark);
  margin-bottom: 6px;
}

.form-sub {
  color: var(--text-light);
  font-size: 0.88rem;
  margin-bottom: 32px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.field label {
  font-weight: 600;
  font-size: 0.88rem;
  color: var(--text-dark);
}

.optional {
  font-weight: 400;
  color: var(--text-light);
}

.field input,
.field select,
.field textarea {
  border: 1.5px solid var(--cream-dark);
  border-radius: 12px;
  padding: 13px 16px;
  font-size: 0.97rem;
  font-family: 'Inter', sans-serif;
  color: var(--text-dark);
  background: var(--cream);
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  width: 100%;
  resize: vertical;
}

.field input:focus,
.field select:focus,
.field textarea:focus {
  border-color: var(--orange);
  box-shadow: 0 0 0 3px rgba(247, 148, 29, 0.12);
  background: var(--white);
}

.submit-btn {
  background: var(--orange);
  color: var(--white);
  border: none;
  border-radius: 10px;
  padding: 15px 36px;
  font-size: 1rem;
  font-weight: 700;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 8px;
  box-shadow: 0 4px 20px rgba(247, 148, 29, 0.3);
}

.submit-btn:hover:not(:disabled) {
  background: var(--orange-dark);
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(247, 148, 29, 0.4);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.success-card {
  text-align: center;
  padding: 64px 48px;
}

.success-icon {
  width: 72px;
  height: 72px;
  background: linear-gradient(135deg, var(--green), var(--green-light));
  color: white;
  font-size: 2rem;
  font-weight: 700;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
}

.success-card p {
  color: var(--text-mid);
  line-height: 1.7;
  margin-bottom: 32px;
}

.back-btn {
  background: var(--green);
  color: var(--white);
  padding: 13px 32px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;
  transition: background 0.2s;
  display: inline-block;
}
.back-btn:hover { background: var(--green-dark); }

.info-panel {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.info-block {
  background: var(--white);
  border-radius: 20px;
  padding: 32px;
  border: 1.5px solid var(--cream-dark);
}

.info-block h3 {
  font-size: 1.05rem;
  font-weight: 800;
  color: var(--text-dark);
  margin-bottom: 20px;
}

.steps {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.step {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.step-num {
  width: 32px;
  height: 32px;
  background: var(--orange);
  color: var(--white);
  font-weight: 800;
  font-size: 0.85rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.step div:last-child {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.step strong {
  font-size: 0.92rem;
  color: var(--text-dark);
}

.step span {
  font-size: 0.85rem;
  color: var(--text-mid);
  line-height: 1.5;
}

.contact-block { background: linear-gradient(135deg, #f0faf4, #e8f5ec); border-color: rgba(26, 107, 53, 0.2); }

.contact-item {
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding-bottom: 14px;
  border-bottom: 1px solid rgba(26, 107, 53, 0.1);
  margin-bottom: 14px;
}

.contact-item:last-child {
  padding-bottom: 0;
  border-bottom: none;
  margin-bottom: 0;
}

.contact-label {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--green);
}

.contact-item a, .contact-item span {
  font-size: 0.95rem;
  color: var(--text-dark);
  font-weight: 500;
  text-decoration: none;
}

.contact-item a:hover { color: var(--green); }

@media (max-width: 900px) {
  .join-grid { grid-template-columns: 1fr; }
  .info-panel { order: -1; }
  .form-card, .success-card { padding: 32px 24px; }
}
</style>
