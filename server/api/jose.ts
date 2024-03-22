import { EncryptJWT, jwtDecrypt } from "jose";

export default defineEventHandler(async () => {
  const SECRET = new TextEncoder().encode("12345678912345678912345678912345");

  const encrypted = await new EncryptJWT({ hello: "world" })
    .setProtectedHeader({
      alg: "dir",
      enc: "A128CBC-HS256",
    })
    .setExpirationTime("1h")
    .encrypt(SECRET);

  const decrypted = await jwtDecrypt(encrypted, SECRET);
  return decrypted;
})
