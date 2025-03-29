# SYRUS - Insurance and Risk Management

## Overview
This is an innovative solution for insurance and risk management that leverages AI to dynamically calculate insurance premiums based on an individual's risk score. Traditional insurance models rely on historical data and generalized risk factors, which often result in inaccurate premium calculations. Our system personalizes insurance pricing by considering an individual's health, lifestyle, and other critical factors to determine a risk score that directly impacts their premium amount.

## Problem Statement
Traditional insurance pricing models depend on historical data and generalized risk factors, leading to inaccurate premium calculations. This can result in financial inefficiencies for both insurers and policyholders. Our approach ensures fairer pricing and incentivizes healthier lifestyles.

## Solution
Our system calculates an individual's Risk Score based on various health and lifestyle factors. This score is then used to determine insurance premiums, ensuring fair pricing. Additionally, our solution integrates fraud detection and provides personalized health recommendations to help users lower their risk score and premiums.

## Target Audience
- Health-conscious individuals who want to benefit from lower insurance premiums based on their lifestyle choices.
- Insurance companies looking for an AI-driven approach to risk assessment and fraud detection.

## Implemented Features
- **Risk Score Calculation using UPTIQ AI Agent**
- **Personalized Recommendations** to improve health and reduce risk score
- **Fraud Detection** using Retrieval-Augmented Generation (RAG)
- **Dynamic Premium Calculation** based on the risk score

## Technologies Used
### Innovation
1. **Risk Score Calculation**
   - The risk score is calculated using the formula:
     
     ```
     Risk Score = (W1 × Age Factor) + (W2 × BMI Factor) + (W3 × Lifestyle Factor) +
                  (W4 × Medical History Factor) + (W5 × Family History Factor) +
                  (W6 × Occupation Factor) + (W7 × Fitness Factor)
     ```
   - The weight coefficients (W1-W7) ensure the score remains within the 0-100 range.

2. **Premium Calculation**
   - The premium is calculated as:
     
     ```
     Premium = Base Premium + (Risk Score × Risk Factor)
     ```
   - A higher risk score results in higher premium costs.

3. **Fraud Detection using RAG**
   - The AI model is enhanced with domain knowledge to detect fraudulent activities efficiently.

## System Architecture
(Insert Flow Diagram / Architecture Image Here)

## Demo Video
Check out our demo video showcasing the project:
[![SYRUS Demo](https://img.youtube.com/vi/iEGVvYh_nqg/0.jpg)](https://www.youtube.com/watch?v=iEGVvYh_nqg)

## PPT LINK
[[PPT Link ]](https://docs.google.com/presentation/d/1m82sFMTIa9qFrokgIxdNiP5hbKh_aho-lTzWY2IQJIY/edit?usp=sharing)

## Future Scope
- Integration with wearable health tracking devices for real-time risk assessment
- Expansion to other types of insurance (e.g., auto, life, home)
- Machine learning improvements for fraud detection
- Partnership with insurance companies for industry adoption



## Contributors
- **Team Name:** CtrlCV
- **Institute:** Vivekanand Education Society’s Institute of Technology


For any questions or contributions, feel free to open an issue or reach out!

