import React from "react";
import "./about.css";

const About = () => {
  return (
    <div
      id="main"
      style={{
        overflowY: "scroll",
      }}
    >
      <h2
        style={{
          fontSize: 38,
        }}
      >
        Is BMI an Accurate Measure of Health?
      </h2>
      <div>
        <p>Plus, 4 factors that can make BMI misleading</p>
      </div>
      <div className="entry-featured-image entry-featured-image--hero -full-left">
        <img
          width="650"
          height="428"
          src="https://health.clevelandclinic.org/wp-content/uploads/sites/3/2022/01/MeasuringBMI-1293501993-770x533-1-650x428.jpg"
          className="attachment-hero size-hero wp-post-image"
          alt="A colorful meter made to represent body mass index."
        />
      </div>
      <div className="entry-content">
        <p>
          Do some quick math, and BMI — or body mass index — seems like the key
          to unlocking mysteries about your health. But more and more people are
          starting to question this weight-to-height ratio. (Tom Brady, only the
          greatest quarterback of all time, has a BMI that puts him in the
          overweight range!)
        </p>

        <p>
          So is BMI really accurate? Clinical psychologist Leslie Heinberg, PhD
          , is the director of Enterprise Weight Management for the Cleveland
          Clinic. In other words, she's a weight and BMI expert. Dr. Heinberg
          explains the rise of BMI as a tool to measure your health — and
          whether to use it or lose it.
        </p>
        <h2
          style={{
            fontSize: 38,
          }}
        >
          What is BMI?
        </h2>
        <p>
          BMI measures your weight-to-height ratio. “People who are taller tend
          to weigh more, so you can't compare weight without taking height into
          consideration,” says Dr. Heinberg. “BMI is your weight in kilograms
          divided by your height in meters squared.”
        </p>
        <p>
          BMI has been around for a while. (A Belgian mathematician named
          Lambert Adolphe Jacques Quetelet developed it in 1832.) Dr. Heinberg
          says researchers initially used BMI to describe large groups of
          people, not individual health.
        </p>
        <p>
          “But it really took off around the mid-20th century with actuaries,”
          she says. “They were looking to describe populations to determine
          things like risk and life insurance.”
        </p>
        <p>
          Looking at the BMIs of such large groups of people revealed some
          hard-to-ignore patterns. Certain BMI ranges were associated with
          greater risks of disease, mortality and other poor outcomes. And so
          lines were drawn — below this line, you're “healthy”; above it, you're
          “at-risk.”
        </p>
        <p>
          “But it's the same with any metric in medicine,” explains Dr.
          Heinberg. “Is there something magical with hypertension such that 120
          over 80 is normal, and 121 over 81 is high blood pressure? No. But
          when we look at hundreds of thousands of people, there are differences
          at that line.” &nbsp;
        </p>
        <h2
          style={{
            fontSize: 38,
          }}
        >
          How to measure your BMI
        </h2>
        <p>
          To calculate BMI, use this adult BMI calculator or these formulas:
        </p>
        <ul>
          <li>
            <strong>U.S. units:</strong> Weight in pounds ÷ height<sup>2</sup>
            &nbsp;in inches) x 703 = BMI (for example: 150 pounds ÷ 65 inches
            <sup>2</sup> x 703 = <strong>26.6</strong>)
          </li>
        </ul>
        <ul>
          <li>
            <strong>Metric units:</strong> Weight in kilograms ÷ height
            <sup>2</sup>&nbsp;in meters = BMI (for example: 70 kilograms ÷ 1.7
            meters<sup>2</sup> = <strong>24.2</strong>)
          </li>
        </ul>
        <p>
          <img
            decoding="async"
            style={{
              fontSize: 38,
            }}
            src="https://health.clevelandclinic.org/wp-content/uploads/sites/3/2022/01/table-HE-BMI-weightClass_800x1204.jpg"
            alt="Table BMI weight classification"
          />
        </p>
        <p>
          If you find yourself out of the normal range, Dr. Heinberg says it's a
          great starting point for a talk with your physician.{" "}
        </p>
        <p>
          “People don't automatically need to reduce their BMI into the ‘normal
          range' to see health benefits. Even dropping your BMI one or two
          points can significantly reduce the risk of conditions such as
          diabetes and cardiovascular disease.”
        </p>

        <h2
          style={{
            fontSize: 38,
          }}
        >
          How accurate is BMI?
        </h2>
        <p>
          File this one under “it's complicated.” As your BMI rises, your risk
          for health problems increases as well. For example, people who have
          BMIs in the overweight or obesity ranges are at higher risk for
          developing diabetes than people in the normal range.{" "}
        </p>
        <p>
          “That risk may be twice as high,” says Dr. Heinberg. “But when you
          look at people whose BMIs are more than 40, the risk may increase to
          20 times higher.”
        </p>
        <p>
          BMI is an exercise in health probability. Does a high BMI mean you
          automatically have poor health? No. Does it dramatically increase your
          risk of poor health? Absolutely.
        </p>
        <p>
          For example, not everyone who has a BMI over 40 has diabetes. But many
          more people with BMIs over 40 have diabetes than people in the
          overweight or normal weight range.
        </p>
        <p>
          “A too-high or too-low BMI is not an ironclad guarantee that you will
          develop a chronic disease,” notes Dr. Heinberg. “Rather, it's an
          important piece of information that you and your primary healthcare
          provider should look at within the context of evaluating you as a
          whole person.”
        </p>
        <h2
          style={{
            fontSize: 38,
          }}
        >
          Why isn't BMI accurate in some cases?
        </h2>
        <p>
          Some exceptions can make BMI seem more like a Magic 8 Ball, though.
          Factors that can make BMI not accurate include:
        </p>
        <h3>Race and ethnicity</h3>
        <p>
          When it comes to BMI, all races and ethnicities are lumped together —
          and that can lead to unclear and confusing results. More and more
          research shows that there are biological and genetic differences in
          the relationship between weight, muscle mass and disease risk among
          different groups of people. BMI does not account for that.
        </p>
        <p>
          Certain genetic factors can affect BMI accuracy because of their
          effect on weight distribution and muscle mass. For example, a 2011
          study showed that Black women had less metabolic risk at higher BMIs
          than white women. Another showed that Mexican American women tend to
          have more body fat than white and Black women.
        </p>
        <p>
          Other research shows that for people of Asian or Middle Eastern
          descent, even a lower BMI may be misleading. They have a higher risk
          for metabolic diseases like diabetes at a lower BMI than people of
          European descent.
        </p>
        <p>
          “The cutoffs we use may miss some people who are high risk and may
          need earlier intervention,” Dr. Heinberg notes. “They might not get
          the preventive care they need since they look at their lower BMI and
          think, Great, I'm in good health, I don't need to do anything'.”
        </p>

        <h3>Muscle mass</h3>
        <p>
          People who are athletic tend to have a higher percentage of lean
          muscle mass and a lower percentage of fat mass than the average
          population. These factors can throw a wrench in their BMI
          measurements. They might measure in the overweight category (or
          higher) despite having great overall health.
        </p>
        <h3>Weight distribution</h3>
        <p>
          Being pear- or apple-shaped doesn't just affect clothing preferences.
          “BMI does not take waist circumference into account,” explains Dr.
          Heinberg. “Two people can weigh the same and, therefore, have the same
          BMI. But their risk for disease might not be the same.
        </p>
        <p>
          “Say Person A has a higher waist circumference, carrying their weight
          in their abdomen. Person B carries their weight lower in their body.
          Person A has a higher risk of metabolic and cardiovascular disease,
          but their identical BMI doesn't tell that story,” she notes.
        </p>
        <h3>Age</h3>
        <p>
          Older adults tend to have more body fat and less muscle mass — but
          that's not necessarily a bad thing. Studies show that BMIs in the
          high-normal to overweight range may protect older adults from
          developing certain diseases and dying early.
        </p>
        <h2
          style={{
            fontSize: 38,
          }}
        >
          Does your BMI still matter?
        </h2>
        <p>
          Think of BMI like a puzzle piece: It's a part of your whole health
          picture. Other valuable pieces include:
        </p>
        <ul>
          <li>
            <strong>Blood pressure:</strong> Blood pressure measures the
            pressure of your blood against your artery walls as your heart
            beats. It's a good indicator of heart health and heart disease risk.
          </li>
          <li>
            <strong>Blood sugar:</strong> Blood sugar tests tell you how much
            glucose (sugar) is in your blood. They help doctors screen for
            pre-diabetes and diabetes.
          </li>
          <li>
            <strong>Cholesterol:</strong> Your cholesterol levels show the
            amount of LDL (bad) and HDL (good) cholesterol in your blood. Too
            much LDL increases your heart attack and stroke risk.
          </li>
          <li>
            <strong>Heart rate:</strong> A high resting heart rate puts you at
            increased risk for heart attack and death.
          </li>
          <li>
            <strong>Inflammation:</strong> Chronic inflammation is linked to
            diseases like cancer, rheumatoid arthritis, heart disease and Type 2
            diabetes.
          </li>
          <li>
            <strong>Lean muscle mass versus fat mass:</strong> A higher
            percentage of lean muscle mass can protect against obesity and
            obesity-related conditions, including diabetes.
          </li>
          <li>
            <strong>Waist circumference:</strong> You have a higher risk for
            developing obesity-related conditions if your waist circumference is
            more than 40 inches (men) or more than 35 inches (nonpregnant
            people).
          </li>
        </ul>
        <p>
          “Knowing a patient's lean muscle mass versus fat mass may be more
          informative than BMI, but it's hard to measure accurately and
          cheaply,” adds Dr. Heinberg. “Waist circumference is also hard to
          measure accurately, particularly in patients with greater obesity.
        </p>
        <p>
          “That's one of the reasons we rely on BMI. All you need is a scale,
          stadiometer (which measures height) and calculator,” she says.
        </p>
        <p>
          Dr. Heinberg's take-home point: Even with its many exceptions, don't
          throw the BMI baby out with the bathwater.
        </p>
        <p>
          “Blood pressure tells you about cardiovascular risk, but BMI tells you
          about risk for that and other conditions like cancer, endocrine
          disorders and sleep apnea,” says Dr. Heinberg. “Knowing someone has
          obesity based on BMI can lead to a more comprehensive evaluation with
          their doctor.”
        </p>
      </div>
      <h4>

        <li>
          <strong>SOURCE: </strong>
          <a
            rel="noreferrer noopener"
            href="https://health.clevelandclinic.org/is-bmi-accurate/"
            target="_blank"
          >
            health.clevelandclinic.org
          </a>
        </li>
      </h4>
    </div>
  );
};

export default About;
