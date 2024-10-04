import React from 'react';

const Health = ({ imageUrl }) => {
  return (
    <div className='container biography'>
      {/* Health Image Section */}
      <div className="banner">
        <img src={imageUrl} alt="Health Tips" />
      </div>

      {/* Health Tips Sections */}
      <div className="banner">
        <h2>Health Tips</h2>
        <h3>Stay Healthy with Care404</h3>

        {/* General Health Tips */}
        <section>
          <h4>General Health Tips</h4>
          <ul>
            <li><strong>Stay Hydrated:</strong> Drink at least 8 glasses of water daily to stay hydrated.</li>
            <li><strong>Eat a Balanced Diet:</strong> Incorporate fruits, vegetables, whole grains, and lean proteins into your meals.</li>
            <li><strong>Exercise Regularly:</strong> Aim for 30 minutes of moderate exercise daily.</li>
            <li><strong>Get Enough Sleep:</strong> Adults should aim for 7-9 hours of sleep each night.</li>
            <li><strong>Avoid Smoking & Alcohol:</strong> Quitting smoking and reducing alcohol can significantly improve health.</li>
          </ul>
        </section>

        {/* Mental Health Tips */}
        <section>
          <h4>Mental Health Tips</h4>
          <ul>
            <li><strong>Practice Mindfulness:</strong> Meditation and deep breathing exercises can reduce stress and anxiety.</li>
            <li><strong>Stay Connected:</strong> Spend quality time with family and friends to improve emotional well-being.</li>
            <li><strong>Take Breaks:</strong> Short breaks during work or study help avoid burnout.</li>
            <li><strong>Seek Help:</strong> Reach out to a therapist if you're feeling overwhelmed or stressed.</li>
          </ul>
        </section>

        {/* Heart Health Tips */}
        <section>
          <h4>Heart Health Tips</h4>
          <ul>
            <li><strong>Eat Heart-Healthy Foods:</strong> Incorporate omega-3-rich foods like salmon and walnuts into your diet.</li>
            <li><strong>Monitor Blood Pressure:</strong> Regularly track your blood pressure to reduce heart-related risks.</li>
            <li><strong>Stay Active:</strong> Aerobic exercises like jogging help improve heart health.</li>
            <li><strong>Limit Salt Intake:</strong> Reducing sodium can lower the risk of high blood pressure.</li>
          </ul>
        </section>

        {/* Immune System Boosting Tips */}
        <section>
          <h4>Immune System Boosting Tips</h4>
          <ul>
            <li><strong>Eat Immune-Boosting Foods:</strong> Consume vitamin C-rich foods like oranges and vitamin D supplements.</li>
            <li><strong>Get Vaccinated:</strong> Stay updated on vaccinations to prevent common illnesses.</li>
            <li><strong>Practice Good Hygiene:</strong> Wash your hands regularly to prevent infections.</li>
            <li><strong>Manage Stress:</strong> Chronic stress weakens your immune system, so practice relaxation techniques.</li>
          </ul>
        </section>

        {/* Skin Care Tips */}
        <section>
          <h4>Skin Care Tips</h4>
          <ul>
            <li><strong>Sun Protection:</strong> Apply sunscreen with SPF 30 or higher, even on cloudy days.</li>
            <li><strong>Stay Hydrated:</strong> Drinking enough water helps keep your skin moisturized.</li>
            <li><strong>Moisturize Daily:</strong> Use a quality moisturizer to prevent dry skin.</li>
            <li><strong>Eat a Healthy Diet:</strong> A diet rich in vitamins and antioxidants promotes healthy, clear skin.</li>
          </ul>
        </section>

      </div>
    </div>
  );
}

export default Health;
