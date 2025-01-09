```javascript
// Correct usage of Tailwind's utility classes
<div class="bg-blue-500 text-white p-4">
  <p>This is some text</p>
</div>

//Alternative solution using a custom class (recommended)
<div class="custom-blue-text">
    <p>This is some text</p>
</div>

/* In your stylesheet */
.custom-blue-text {
    @apply bg-blue-500 text-white p-4;
}
```