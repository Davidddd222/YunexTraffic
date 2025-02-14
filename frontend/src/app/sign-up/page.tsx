import { SignIn, SignUp } from '@clerk/nextjs'

export default function Home() {
  return (
    <div>
      <h1>Sign in or sign up</h1>

      <SignIn fallbackRedirectUrl="/dashboard" signUpFallbackRedirectUrl="/onboarding" />
      <SignUp fallbackRedirectUrl="/onboarding" signInFallbackRedirectUrl="/dashboard" />
    </div>
  )
}
