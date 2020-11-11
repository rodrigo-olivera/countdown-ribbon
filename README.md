# Countdown Ribon

The `countdown-ribbon` is a block responsible for adding a countdow ribbon in to the header of the site.

![image](https://user-images.githubusercontent.com/65255533/98749331-fd74ac00-2380-11eb-86c4-b68ab079f6c8.png)

## Configuration

1. Import the `vtex.countdown-ribbon` app to your theme's dependencies in the manifest.json, for example:

```json
"dependencies": {
  "vtex.countdown-ribbon": "0.x"
}
```

2. Add the `countdown-ribbon` to other theme block, such as the `header-layout`. In the example below, the `countdown-ribbon` is added to the `header-layout.desktop` block:

```json
...
  "header-layout.desktop": {
    "children": [
      "countdown-ribbon",
      "flex-layout.row#1-desktop",
      "flex-layout.row#2-desktop",
      "flex-layout.row#3-desktop",
      "sticky-layout#4-desktop"
    ]
  },
    "countdown-ribbon": {
    "props": {
      "active": true,
      "dueDateTime": "Tue Nov 10 2020 18:11:36 GMT-0600",
      "text": "This is a awesome promo text",
      "buttonURI": "/",
      "buttonText": "Buy"
    }
  },
  ...
```

| Prop name               | Type       | Description                                                                       | Default value        |
| ----------------------- | ---------- | --------------------------------------------------------------------------------- | -------------------- |
| `active`                | `boolean`  | Controls if the component will be shown                                           | `true`               |
| `dueDateTime`           | `date-time`| Date on wich the countdown deadline is in ISO format                              | `Now + 10000000`     |
| `text`                  | `string`   | Defines the Message Text to show and promete a slogan for a promotion             | `Some Awesome Text`  |
| `buttonText`            | `string`   | Button Text to redirect the user to a URL                                         | `Comprar`            |
| `buttonURI`             | `string`   | URL to redirect the user                                                          | `/`                  |

## Customization

In order to apply CSS customizations in this and other blocks, follow the instructions given in the recipe on [Using CSS Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization).

| CSS Handles           |
| --------------------- |
| `container`           |
| `text`                |
| `countdown`           |
| `button`              |
| `container_mobile`    |
| `text_mobile`         |
| `countdown_mobile`    |
| `button_mobile`       |