import { signOut } from '@/auth'
import { redirect } from 'next/navigation'

export default async function LogoutPage() {
  await signOut({ redirect: false })
  redirect('/auth/login')
}
