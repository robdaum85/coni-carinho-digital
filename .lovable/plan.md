

# Inserir Google Analytics (gtag.js)

Adicionar o código do Google Analytics (ID: `G-PKMP2X58KN`) no arquivo `index.html`, dentro do `<head>`, antes das demais meta tags.

## Alteração

**Arquivo:** `index.html`

Inserir o seguinte bloco logo após o `<head>`:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-PKMP2X58KN"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-PKMP2X58KN');
</script>
```

Apenas 1 arquivo será modificado. Nenhum arquivo novo será criado.

