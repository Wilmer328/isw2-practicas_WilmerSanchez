# Práctica 1 - Limpieza de código

## Código original

```tsx
const containerStyle = theme === 'light' ? styles.containerLight : styles.containerDark;
const titleStyle = theme === 'light' ? styles.titleLight : styles.titleDark;
const inputStyle = theme === 'light' ? styles.inputLight : styles.inputDark;
const buttonStyle = theme === 'light' ? styles.buttonLight : styles.buttonDark;
const buttonTextStyle = theme === 'light' ? styles.buttonTextLight : styles.buttonTextDark;

const handleLogin = () => {
  if (!email.endsWith('@gmail.com')) {
    Alert.alert('Error', 'Por favor, ingresa un correo de Gmail válido.');
    return;
  }
  login(email);
  router.replace('/(protected)/home');
};
```

## Code Smells encontrados

1. **Duplicate Code:** Se repite varias veces la misma condición (`theme === 'light'`) para seleccionar los estilos.
2. **Magic String:** Se utiliza la cadena `"@gmail.com"` directamente en el código en lugar de definir una constante.
3. **Long Method (inicio):** El componente `LoginScreen` comienza a crecer demasiado porque mezcla la lógica del inicio de sesión, la selección de estilos y la interfaz de usuario.
4. **Poor Separation of Concerns:** La lógica de los estilos y la lógica del inicio de sesión están en el mismo componente, cuando podrían separarse para facilitar el mantenimiento.

## Código refactorizado

```tsx
const GMAIL_DOMAIN = '@gmail.com';

const isLightTheme = theme === 'light';

const containerStyle = isLightTheme ? styles.containerLight : styles.containerDark;
const titleStyle = isLightTheme ? styles.titleLight : styles.titleDark;
const inputStyle = isLightTheme ? styles.inputLight : styles.inputDark;
const buttonStyle = isLightTheme ? styles.buttonLight : styles.buttonDark;
const buttonTextStyle = isLightTheme ? styles.buttonTextLight : styles.buttonTextDark;

const handleLogin = () => {
  if (!email.endsWith(GMAIL_DOMAIN)) {
    Alert.alert('Error', 'Por favor, ingresa un correo de Gmail válido.');
    return;
  }

  login(email);
  router.replace('/(protected)/home');
};
```

## Reflexión

Cuando desarrollé este componente me enfoqué principalmente en que funcionara correctamente. 
Al revisarlo nuevamente, me doy cuenta de que hay varias oportunidades para hacerlo más limpio y fácil de mantener. 
Ahora entiendo la importancia de evitar duplicar código, utilizar constantes para valores repetidos y separar responsabilidades dentro de un componente. 
Estos cambios no modifican el funcionamiento de la aplicación, pero hacen que el código sea más claro y sencillo de actualizar en el futuro.
