
export default function LoginForm({ onLogin }) {
  async function handleSubmit(e) {
    e.preventDefault();
    onLogin(e.target.username.value, e.target.password.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Log In</legend>
        <input name="username" placeholder="username" />
        <input type='password' name="password" placeholder="password" />
        <button type='submit'>Login</button>
      </fieldset>
    </form>
  )
}