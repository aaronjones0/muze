# ⚠ Next Auth

{% hint style="danger" %}
Deprecated. Using Auth0 now for AuthN / AuthZ.
{% endhint %}

## References

{% embed url="https://stackoverflow.com/a/62742371/11424689" %}
Discord `redirect_uri`
{% endembed %}

{% embed url="https://github.com/nextauthjs/next-auth/issues/5664#issue-1427265403" %}
Working `<SessionProvider>` example
{% endembed %}

{% embed url="https://next-auth.js.org/configuration/providers/oauth#built-in-providers" %}
Built-in OAuth Providers
{% endembed %}

## Generating random strings

A good method is `openssl`:

```bash
openssl rand -base64 32
```
