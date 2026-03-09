# Pulse Toast ⚡

A lightweight **toast notification library for React** with smooth animations and a simple API.

Pulse Toast helps you display elegant toast notifications in your React applications with minimal setup.

---

## ✨ Features

- ⚡ Lightweight and fast
- 🚀 Simple API
- 📱 Responsive design
- 🎬 Smooth animations
- 🔧 TypeScript support

---

## 📦 Install using npm

```bash
npm i pulse-toast
```

---

## 🧩 Use the Toaster

```tsx
<div>
  <Toaster />
</div>
```

Add the **Toaster component at the top of your application**.

It has a `position` prop of type **string** which supports the following values:

- `top-left`
- `top-center`
- `top-right`
- `bottom-left`
- `bottom-center`
- `bottom-right`

Example:

```tsx
<Toaster position="top-right" />
```

---

## 🍞 Use the `toast` function

```ts
toast({ message: "Hello developer" })
```

The `toast` function accepts an object with the following properties:

---

### `message`

- **Description:** The toast message
- **Type:** `string`
- **Required:** ✅ Yes

---

### `duration`

- **Description:** Time after which the toast disappears
- **Type:** `number`
- **Required:** ❌ No
- **Default:** `3000ms` (3 seconds)

Example:

```ts
toast({
  message: "Saved successfully",
  duration: 5000
})
```

---

### `type`

- **Type:** `string`
- **Required:** ❌ No
- **Values:**
  - `success`
  - `failure`

Example:

```ts
toast({
  message: "Operation successful",
  type: "success"
})
```

---

### `icon`

Add a custom icon to the toast.

- **Type:** `string (emoji)` | `ReactNode`
- **Required:** ❌ No

Example with emoji:

```ts
toast({
  message: "File uploaded",
  icon: "📁"
})
```

Example with React icon:

```tsx
import { Check } from "lucide-react"

toast({
  message: "Saved successfully",
  icon: <Check />
})
```

## 📚 Why Pulse Toast?

Many toast libraries are either **too heavy** or **overcomplicated**.

Pulse Toast focuses on:

- Simplicity
- Performance
- Developer experience

You get a clean API without unnecessary complexity.

---

## 🛠 Built With

- React
- TypeScript
- Modern animation libraries

---

## 👨‍💻 Author

**Ayantik Sarkar**

Student at **NIT Rourkela**  
Passionate about web development and building developer tools.

---

## 📜 License

MIT License

---

## ⭐ Support

If you find this project helpful, consider giving it a ⭐ on GitHub.