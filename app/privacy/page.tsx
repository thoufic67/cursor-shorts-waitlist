export default function PrivacyPolicy() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="mb-2 text-4xl font-bold">Privacy Policy — CursorShorts</h1>
      <p className="mb-8 text-gray-500">Last updated: September 28, 2025</p>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold">Who we are</h2>
        <p>
          CursorShorts is built and operated by{" "}
          <strong>Mohammed Thoufic</strong> and <strong>Ajan Raj</strong>{" "}
          (&quot;we&quot;, &quot;us&quot;, or &quot;Company&quot;). This Privacy
          Policy explains what information we collect, how we use it, who we
          share it with, and your rights.
        </p>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold">Scope</h2>
        <p>
          This policy covers personal data collected and processed when you use
          our website and services at <strong>cursorshorts.com</strong> (the
          &quot;Service&quot;). By using the Service, you accept the practices
          described in this policy.
        </p>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold">Information we collect</h2>
        <ul className="list-inside list-disc space-y-2">
          <li>
            <strong>Account information:</strong> email address and name
            (collected when you sign up). Currently sign-up is available via
            Google OAuth.
          </li>
          <li>
            <strong>Content you provide:</strong> files and media you upload and
            any content you ask us to publish (for example, videos you request
            us to publish to YouTube on your behalf).
          </li>
          <li>
            <strong>User logs & analytics:</strong> usage logs, IP addresses,
            device and browser metadata, and aggregated analytics data collected
            to operate and improve the Service.
          </li>
          <li>
            <strong>Generated content & prompts:</strong> text prompts you
            submit and the scripts, image prompts, or other generated outputs we
            create for you (used to provide the requested features).
          </li>
        </ul>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold">How we collect data</h2>
        <p>
          We collect data you provide directly (for example, when you sign up or
          upload content) and automatically through technologies such as cookies
          and analytics tools (Axiom and PostHog). We also integrate with Google
          OAuth for sign-in and the YouTube API if you choose to connect your
          YouTube account so we can publish content on your behalf.
        </p>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold">How we use your information</h2>
        <ul className="list-inside list-disc space-y-2">
          <li>
            To provide, operate, and maintain the Service (including publishing
            to YouTube when you authorize it).
          </li>
          <li>
            To generate scripts, image prompts, and other outputs by making
            requests to third-party AI and media services such as ElevenLabs,
            OpenRouter, and OpenAI.
          </li>
          <li>To analyze and improve the Service using Axiom and PostHog.</li>
          <li>
            To communicate with you about your account, products, features, and
            support requests.
          </li>
          <li>
            To comply with legal obligations and protect the rights, property,
            or safety of CursorShorts and its users.
          </li>
        </ul>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold">
          Third parties and integrations
        </h2>
        <p>
          We use the following third-party services and may share limited
          information with them to provide the Service:
        </p>
        <ul className="list-inside list-disc space-y-2">
          <li>
            <strong>Google (OAuth & YouTube API):</strong> used for account
            sign-in and to publish videos to YouTube when you explicitly
            authorize that action. We adhere to Google&apos;s API policies and
            the Limited Use requirements where applicable.
          </li>
          <li>
            <strong>NeonDB:</strong> our primary database provider; data is
            stored in the United States.
          </li>
          <li>
            <strong>Analytics:</strong> Axiom and PostHog are used to collect
            and analyze usage and performance data.
          </li>
          <li>
            <strong>AI & media providers:</strong> ElevenLabs, OpenRouter, and
            OpenAI &mdash; we send prompts and receive generated content
            (scripts, image prompts, etc.) to create features you request. We do
            NOT share user data with these providers beyond the prompts/requests
            you authorize and we do not use your data to train models (see
            below).
          </li>
        </ul>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold">
          Google / YouTube Access &amp; OAuth
        </h2>
        <p>
          CursorShorts lets you connect your Google/YouTube account so you can
          publish generated videos and view channel analytics inside the app.
          When you connect YouTube we request the following Google API scopes
          (exact scope strings shown):
        </p>
        <ul className="list-inside list-disc space-y-2 font-mono text-sm">
          <li>https://www.googleapis.com/auth/youtube</li>
          <li>https://www.googleapis.com/auth/youtube.upload</li>
          <li>https://www.googleapis.com/auth/youtube.readonly</li>
          <li>https://www.googleapis.com/auth/yt-analytics.readonly</li>
        </ul>
        <p className="mt-4">
          <strong>Purpose.</strong> We use these permissions only to perform
          actions you explicitly request: uploading videos you create, reading
          channel and video metadata to prevent duplicates and map uploads
          correctly, and displaying analytics and earnings data in your
          CursorShorts dashboard. We will not access or use additional YouTube
          data beyond these purposes.
        </p>
        <p>
          <strong>Token storage &amp; security.</strong> We store OAuth access
          and refresh tokens encrypted in our database (NeonDB, USA). Tokens are
          used only to maintain the connection and make API calls on your
          behalf; we do not share your tokens with third parties.
        </p>
        <p>
          <strong>Retention &amp; caching.</strong> Analytics and metadata
          pulled from YouTube may be cached for up to 90 days to improve
          dashboard speed and historical comparison. Media you upload at your
          request is retained until you delete it or request deletion.
        </p>
        <p>
          <strong>Disconnect &amp; revoke.</strong> To disconnect your YouTube
          account from CursorShorts: go to Settings → Connected Accounts →
          &quot;Disconnect YouTube.&quot; Disconnecting will revoke our refresh
          tokens and stop future API calls. You can also revoke CursorShorts
          access from your Google Account Permissions page. To request full
          deletion of all YouTube-related data we store, email{" "}
          <a
            href="mailto:contact.cursorshorts@gmail.com"
            className="text-blue-600 hover:underline">
            contact.cursorshorts@gmail.com
          </a>{" "}
          including the account email. We will confirm deletion when complete.
        </p>
        <p>
          <strong>Limited Use &amp; compliance.</strong> We comply with
          Google&apos;s API Policies and the Limited Use requirements for
          protecting user data. If you have questions, contact us at{" "}
          <a
            href="mailto:contact.cursorshorts@gmail.com"
            className="text-blue-600 hover:underline">
            contact.cursorshorts@gmail.com
          </a>
          .
        </p>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold">Training and model use</h2>
        <p>
          We do <strong>not</strong> use user data to train our own models or to
          improve third-party models. Prompts and generated outputs are passed
          to third-party providers only to deliver the specific feature you
          requested; they are not used by us for training purposes.
        </p>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold">Data retention and deletion</h2>
        <p>
          We retain your account information, content, and logs for as long as
          necessary to provide the Service and for legitimate business purposes
          (for example, troubleshooting, analytics, and legal compliance).
        </p>
        <p>
          <strong>Account deletion:</strong> at this time, self-service account
          deletion is not available in the app. If you want your account and
          associated data removed, email us at{" "}
          <a
            href="mailto:contact.cursorshorts@gmail.com"
            className="text-blue-600 hover:underline">
            contact.cursorshorts@gmail.com
          </a>{" "}
          with your account email and request. We will process deletion requests
          within 30 days and confirm when deletion is complete.
        </p>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold">Security</h2>
        <p>
          We implement reasonable technical and organizational measures aimed at
          protecting your information. Data you send to CursorShorts is
          transmitted over secure channels (HTTPS/TLS). Your data, including
          OAuth access and refresh tokens, is stored encrypted in NeonDB (US).
          We continuously review security practices, but no system is completely
          secure &mdash; we cannot guarantee absolute protection.
        </p>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold">Sharing and disclosures</h2>
        <p>
          We do not sell personal information. We may share personal information
          with third parties only in the following limited cases:
        </p>
        <ul className="list-inside list-disc space-y-2">
          <li>
            With your explicit consent (for example, publishing a video to your
            YouTube channel when you authorize it).
          </li>
          <li>
            With service providers who perform services on our behalf (e.g.,
            NeonDB, analytics providers, cloud infrastructure, AI providers)
            under contracts that limit how they use your data.
          </li>
          <li>
            If required by law, or to respond to lawful requests or legal
            process.
          </li>
          <li>
            To protect the rights and safety of CursorShorts, our users, or the
            public.
          </li>
        </ul>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold">Children</h2>
        <p>
          The Service is not intended for children under 13. We do not knowingly
          collect personal information from children under 13. If you believe we
          have collected information about a child under 13, contact us at{" "}
          <a
            href="mailto:contact.cursorshorts@gmail.com"
            className="text-blue-600 hover:underline">
            contact.cursorshorts@gmail.com
          </a>
          .
        </p>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold">International transfers</h2>
        <p>
          Your information may be stored and processed in the United States. If
          you are located outside the U.S., please note that data protection
          laws may differ. By using the Service you consent to the transfer of
          your information to the United States.
        </p>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold">Your rights</h2>
        <p>
          Depending on your jurisdiction, you may have rights including access,
          correction, deletion, objection to processing, and data portability.
          To exercise these rights, contact us at{" "}
          <a
            href="mailto:contact.cursorshorts@gmail.com"
            className="text-blue-600 hover:underline">
            contact.cursorshorts@gmail.com
          </a>{" "}
          with a clear request and your account email.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Policy changes</h2>
        <p>
          We may update this Privacy Policy from time to time. When we make
          material changes, we will update the &quot;Last updated&quot; date
          and, where appropriate, provide notice through the Service.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold">Contact us</h2>
        <p>
          If you have questions about this policy or our privacy practices,
          email us at{" "}
          <a
            href="mailto:contact.cursorshorts@gmail.com"
            className="text-blue-600 hover:underline">
            contact.cursorshorts@gmail.com
          </a>
          .
        </p>
      </section>
    </main>
  );
}
