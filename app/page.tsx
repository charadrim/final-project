import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.centeredText}></div>
        Welcome to our all-in-one meal tracking and planning website, where your
        culinary journey begins! Whether you're a fitness enthusiast, a
        nutrition-conscious individual, or someone who simply enjoys good food,
        our platform is designed to make it easier than ever to track and plan
        your daily meals. <br /> <br />
        A World of Culinary Possibilities At our website, we understand that
        food is an essential part of our lives. It's not just about sustenance;
        it's an art, a source of joy, and a means to stay healthy. Our platform
        offers you the opportunity to explore a world of culinary possibilities.
        Whether you're cooking at home or dining out, you can effortlessly
        record and plan your meals.
        <br /> <br />
        Track Your Daily Nutrition Are you curious about the nutritional value
        of your meals? With our intuitive meal tracking feature, you can log the
        details of what you eat, including ingredients, portion sizes, and
        preparation methods. Our platform then calculates the nutritional
        information, such as calories, protein, carbohydrates, and more, giving
        you valuable insights into your daily intake.
        <br /> <br />
        Personalized Meal Planning Planning your meals in advance is a key to a
        healthy lifestyle. Our website provides tools for creating personalized
        meal plans. You can set dietary goals, create weekly or monthly meal
        schedules, and ensure you're meeting your nutritional targets.
        <br /> <br />
        User-Friendly and Intuitive We believe that technology should simplify
        your life, not complicate it. Our website is designed with a
        user-friendly and intuitive interface. You don't need to be a tech
        expert to navigate it. It's as easy as logging in, recording your meals,
        and accessing your meal history.
        <br /> <br />
        Community and Support Meal tracking and planning can be a challenging
        endeavor, but you don't have to do it alone. Our website features a
        supportive community where you can connect with like-minded individuals,
        share recipes, and find inspiration for your culinary adventures.
        <br /> <br />
        Get Started Today Embark on a journey to a healthier, happier you with
        our meal tracking and planning website. It's time to take control of
        your nutrition, savor delicious meals, and make informed choices. Join
        our community today and start your culinary adventure!
      </div>
    </main>
  );
}
