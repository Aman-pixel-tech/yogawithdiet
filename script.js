
const toggleButton = document.querySelector('.toggle-button');
const navLinks = document.querySelector('.nav-links');

toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


// JavaScript to show hidden cards when "Show More" is clicked

document.getElementById('show-more-btn').addEventListener('click', function () {
  const hiddenCards = document.querySelectorAll('.hidden-card');
  hiddenCards.forEach(card => {
    card.classList.remove('hidden-card');
  });
  this.style.display = 'none'; // Optionally hide the "Show More" button after showing all cards
});

// Caloric Needs Calculator
const calculateBtn = document.getElementById('calculate-btn');
const resultDiv = document.getElementById('result');

calculateBtn.addEventListener('click', () => {
  const age = parseInt(document.getElementById('age').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);
  const activityLevel = document.getElementById('activity-level').value;

  if (age && weight && height && activityLevel) {
    let bmr;
    // Calculate BMR based on age, weight, height
    bmr = 10 * weight + 6.25 * height - 5 * age;
    // Adjust for activity level
    switch (activityLevel) {
      case 'sedentary':
        bmr *= 1.2;
        break;
      case 'light':
        bmr *= 1.375;
        break;
      case 'moderate':
        bmr *= 1.55;
        break;
      case 'very-active':
        bmr *= 1.725;
        break;
    }
    resultDiv.textContent = `Your daily caloric needs are approximately ${Math.round(bmr)} calories.`;
    resultDiv.classList.add('fade-in'); // Add fade-in animation
  } else {
    resultDiv.textContent = "Please fill in all fields correctly!";
    resultDiv.classList.add('fade-in');
  }
});

// Diet Tips Slider - Auto Sliding Feature
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showNextSlide() {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(-${currentIndex * 100}%)`;
  });
  currentIndex = (currentIndex + 1) % slides.length; // Loop back to the first slide
}

setInterval(showNextSlide, 3000); // Change slide every 3 seconds

// Fade-in Animation Effect
const dietHeading = document.querySelector('.diet-heading');
const dietDescription = document.querySelector('.diet-description');
const dietImages = document.querySelectorAll('.diet-image img');

// Intersection Observer for lazy loading and animation on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, { threshold: 0.5 });

observer.observe(dietHeading);
observer.observe(dietDescription);
dietImages.forEach(img => observer.observe(img));

// Breathing Circle Animation
const breathingCircle = document.querySelector('.breathing-circle');
const startTimerBtn = document.getElementById('start-timer');

startTimerBtn.addEventListener('click', () => {
  breathingCircle.classList.toggle('active');
  if (breathingCircle.classList.contains('active')) {
    breathingCircle.style.animationPlayState = 'running';
  } else {
    breathingCircle.style.animationPlayState = 'paused';
  }
});

// Recipe Button Alert
document.querySelectorAll('.recipe-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Recipe Coming Soon!');
  });
});

// Show More / Show Less Function
function showMore() {
  const hiddenCards = document.querySelectorAll('.hidden');
  hiddenCards.forEach(card => {
    card.classList.toggle('hidden');
  });

  const button = document.querySelector('.show-more-btn');
  if (button.innerHTML === 'Show More') {
    button.innerHTML = 'Show Less';
  } else {
    button.innerHTML = 'Show More';
  }
}



document.getElementById('calculate-bmi').addEventListener('click', function () {
  const weightInput = document.getElementById('weight1').value;
  const heightInput = document.getElementById('height1').value;

  // Convert inputs to numbers
  const weight = parseFloat(weightInput);
  const height = parseFloat(heightInput) / 100; // Convert cm to meters

  // Validation checks
  if (isNaN(weight) || weight <= 0) {
    alert('Please enter a valid weight greater than 0.');
    return;
  }

  if (isNaN(height) || height <= 0) {
    alert('Please enter a valid height greater than 0.');
    return;
  }

  // Calculate BMI
  const bmi = weight / (height * height);
  let resultText = '';
  let recommendationsHtml = '';
  if (bmi < 18.5) {
    resultText = `Your BMI is ${bmi.toFixed(1)}. You are underweight.`;
    recommendationsHtml = `
          <div class="recommendation-card">
            <h3 class="recommendation-title">Yoga for Underweight</h3>
            <p class="recommendation-content">Try these yoga poses to build muscle and gain weight:</p>
            <ul>
              <li><strong>Downward Dog:</strong> Builds strength and increases appetite.</li>
              <li><strong>Warrior Poses:</strong> Strengthens muscles and improves stamina.</li>
              <li><strong>Boat Pose:</strong> Strengthens core and promotes digestion.</li>
            </ul>
            <button class="recommendation-btn">See Yoga Poses</button>
          </div>
          <div class="recommendation-card">
            <h3 class="recommendation-title">Balanced Diet for Underweight</h3>
            <p class="recommendation-content">Add these nutrient-dense foods to your diet:</p>
            <ul>
              <li><strong>Nut Butters:</strong> High in calories and healthy fats.</li>
              <li><strong>Lean Proteins:</strong> Helps in muscle building.</li>
              <li><strong>Whole Grains:</strong> Provides essential nutrients and energy.</li>
            </ul>
            <button class="recommendation-btn">See Diet Plan</button>
          </div>
        `;
  } else if (bmi >= 18.5 && bmi < 24.9) {
    resultText = `Your BMI is ${bmi.toFixed(1)}. You have a normal weight.`;
    recommendationsHtml = `
          <div class="recommendation-card">
            <h3 class="recommendation-title">Yoga for Maintenance</h3>
            <p class="recommendation-content">Maintain your weight with these yoga routines:</p>
            <ul>
              <li><strong>Sun Salutations:</strong> Great for overall fitness.</li>
              <li><strong>Tree Pose:</strong> Improves balance and flexibility.</li>
              <li><strong>Child’s Pose:</strong> Enhances relaxation and flexibility.</li>
            </ul>
            <button class="recommendation-btn">See Yoga Poses</button>
          </div>
          <div class="recommendation-card">
            <h3 class="recommendation-title">Balanced Diet for Maintenance</h3>
            <p class="recommendation-content">Follow a balanced diet with these guidelines:</p>
            <ul>
              <li><strong>Fruits and Vegetables:</strong> Rich in vitamins and minerals.</li>
              <li><strong>Lean Proteins:</strong> Essential for muscle maintenance.</li>
              <li><strong>Whole Grains:</strong> Provides energy and fiber.</li>
            </ul>
            <button class="recommendation-btn">See Diet Plan</button>
          </div>
        `;
  } else {
    resultText = `Your BMI is ${bmi.toFixed(1)}. You are overweight.`;
    recommendationsHtml = `
          <div class="recommendation-card">
            <h3 class="recommendation-title">Yoga for Overweight</h3>
            <p class="recommendation-content">Incorporate these yoga poses to help manage your weight:</p>
            <ul>
              <li><strong>Chair Pose:</strong> Builds strength and burns calories.</li>
              <li><strong>Plank Pose:</strong> Enhances core stability and strength.</li>
              <li><strong>Bridge Pose:</strong> Strengthens the back and hips.</li>
            </ul>
            <button class="recommendation-btn">See Yoga Poses</button>
          </div>
          <div class="recommendation-card">
            <h3 class="recommendation-title">Balanced Diet for Overweight</h3>
            <p class="recommendation-content">Adopt these dietary changes:</p>
            <ul>
              <li><strong>High Fiber Foods:</strong> Helps with satiety and digestion.</li>
              <li><strong>Lean Proteins:</strong> Supports muscle and reduces fat.</li>
              <li><strong>Healthy Fats:</strong> Opt for avocados, nuts, and seeds.</li>
            </ul>
            <button class="recommendation-btn">See Diet Plan</button>
          </div>
        `;
  }

  // Update the result and recommendations section
  document.getElementById('bmi-result').innerText = resultText;
  document.getElementById('recommendations').innerHTML = recommendationsHtml;
  document.getElementById('recommendations').classList.remove('hidden1');
});



const testimonials = [
  { name: 'Alice', rating: 5, review: 'Fantastic service and great experience!' },
  { name: 'Bob', rating: 4, review: 'Very good, but there is room for improvement.' },
  { name: 'Charlie', rating: 3, review: 'It was okay, but not what I expected.' }
];

const container = document.getElementById('testimonial-container');

function renderTestimonials(filteredTestimonials) {
  container.innerHTML = '';
  filteredTestimonials.forEach(testimonial => {
    const card = document.createElement('div');
    card.className = 'testimonial-card';

    card.innerHTML = `
          <h3>${testimonial.name}</h3>
          <div class="rating">
            ${'★'.repeat(testimonial.rating)}
            ${'★'.repeat(5 - testimonial.rating).split('').map(() => '<span class="star-empty">★</span>').join('')}
          </div>
          <p>${testimonial.review}</p>
        `;

    container.appendChild(card);
  });
}

function filterTestimonials(rating) {
  if (rating) {
    const filtered = testimonials.filter(t => t.rating === rating);
    renderTestimonials(filtered);
  } else {
    renderTestimonials(testimonials);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderTestimonials(testimonials);
});
