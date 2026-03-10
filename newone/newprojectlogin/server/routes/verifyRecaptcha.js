// server/routes/verifyRecaptcha.js
import { RecaptchaEnterpriseServiceClient } from "@google-cloud/recaptcha-enterprise";

/**
 * Verify Google reCAPTCHA Enterprise token
 * @param {object} params
 * @param {string} params.projectID - Google Cloud project ID
 * @param {string} params.recaptchaKey - Site key from Google reCAPTCHA
 * @param {string} params.token - Token from frontend (ReCAPTCHA widget)
 * @param {string} params.recaptchaAction - Action name ('login', 'signup', etc.)
 */
export async function createAssessment({
  projectID,
  recaptchaKey,
  token,
  recaptchaAction,
}) {
  try {
    const client = new RecaptchaEnterpriseServiceClient();
    const projectPath = client.projectPath(projectID);

    const request = {
      parent: projectPath,
      assessment: {
        event: {
          token: token,
          siteKey: recaptchaKey,
        },
      },
    };

    const [response] = await client.createAssessment(request);

    if (!response.tokenProperties.valid) {
      console.log(
        `Invalid token: ${response.tokenProperties.invalidReason}`
      );
      return null;
    }

    if (response.tokenProperties.action === recaptchaAction) {
      console.log(`✅ reCAPTCHA score: ${response.riskAnalysis.score}`);
      return response.riskAnalysis.score;
    } else {
      console.log("⚠️ Action mismatch — token may not be from expected action");
      return null;
    }
  } catch (error) {
    console.error("reCAPTCHA Verification Error:", error);
    return null;
  }
}
