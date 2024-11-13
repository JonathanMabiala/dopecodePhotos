import { defineAuth, secret } from "@aws-amplify/backend";
import { postConfirmation } from "./post-confirmation/resource";

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
    externalProviders: {
      google: {
        clientId: secret("GOOGLE_CLIENT_ID"),
        clientSecret: secret("GOOGLE_CLIENT_SECRET"),
        scopes: ["email"],
      },
      facebook: {
        clientId: secret("FACEBOOK_CLIENT_ID"),
        clientSecret: secret("FACEBOOK_CLIENT_SECRET"),
        scopes: ["email"],
      },

      callbackUrls: ["dopecodephotos://"],
      logoutUrls: ["dopecodephotos://"],
    },
  },
  triggers: {
    postConfirmation,
  },
});
