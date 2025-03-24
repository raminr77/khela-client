import { APP_DATA } from '@/shared/constants';

export function TermsContent() {
  return (
    <article className='flex flex-col gap-2 pb-5 text-left'>
      <p className='text-amber-600'>Last Updated: 01-04-2025</p>
      <p>
        Welcome to Khela! Before using our app, please read these Terms and Conditions
        carefully. By accessing or using Khela, you agree to be bound by these terms. If
        you do not agree, please do not use the app.
      </p>

      <div className='w-full my-2 border-t border-gray-200' />

      <h3 className='text-amber-600'>💩 Introduction</h3>
      <p>
        Khela is a fun, social app that allows users to share their bathroom visits with
        friends. It is meant for entertainment purposes only.
      </p>

      <h3 className='text-amber-600'>💩 Eligibility</h3>
      <ul>
        <li>You must be at least 13 years old to use Khela</li>
        <li>
          By using this app, you confirm that you have the legal capacity to agree to
          these terms.
        </li>
      </ul>

      <h3 className='text-amber-600'>💩 Acceptable Use</h3>
      <ul>
        <li>- Use the app responsibly and respect other users.</li>
        <li>- Avoid posting offensive, harmful, or illegal content.</li>
        <li>- Not spam, harass, or misuse the platform in any way.</li>
      </ul>
      <p>
        We reserve the right to remove content and suspend users who violate these terms.
      </p>

      <h3 className='text-amber-600'>💩 Privacy</h3>
      <ul>
        <li>
          - Khela stores user-generated data, including bathroom visit logs, timestamps,
          and shared messages.
        </li>
        <li>
          - Your data is not shared with third parties but may be visible to your selected
          friends within the app.
        </li>
        <li>
          - By using Khela, you acknowledge that your activity history is stored and
          accessible within the app.
        </li>
        <li>
          - Khela may send notifications about your activity or your friends’ activities.
        </li>
        <li>- You can delete your data at any time through the app settings.</li>
      </ul>

      <h3 className='text-amber-600'>💩 Limitation of Liability</h3>
      <ul>
        <li>
          - Khela is for entertainment purposes and should not be taken too seriously.
        </li>
        <li>
          - We are not responsible for any issues arising from the use of the app,
          including but not limited to:
          <ul className='mt-2 flex flex-col gap-2'>
            <li>-- Embarrassment</li>
            <li>-- Relationship conflicts 😆</li>
            <li>-- Unexpected bathroom-related competition among friends 🚽💩</li>
          </ul>
        </li>
      </ul>
      <p>Use Khela at your own risk!</p>

      <h3 className='text-amber-600'>💩 Changes to Terms</h3>
      <p>
        We may update these Terms and Conditions at any time. Continued use of Khela means
        you accept any changes.
      </p>

      <h3 className='text-amber-600'>💩 Changes to Terms</h3>
      <p>
        By using Khela, you agree to have fun, share responsibly, and embrace the
        weirdness! 🎉🚽
      </p>
      <p>✉️ For any questions:</p>
      <a className='text-amber-600 text-md' href={`mailto:${APP_DATA.email}`}>
        {APP_DATA.email.replace('@', ' [ At ] ')}
      </a>
    </article>
  );
}
