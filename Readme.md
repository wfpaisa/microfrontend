Traducción del libro al español. (Autogenerada con IA)

- Enterprise Angular: Micro Frontends and
- Moduliths with Angular
- Module Federation - Nx - DDD
- Manfred Steyer
- Compra este libro en: http://leanpub.com/enterprise-angular

```sh
# Instalar dependencias:
sudo pacman -S pandoc calibre

# Convertir a .epub
pandoc \
           -f gfm+attributes \
           --metadata-file=metadata.yaml \
           --epub-cover-image=_cover.png \
           --resource-path=manuscript \
           --toc \
           -o convert/angular-ddd.epub \
           $(awk '{print "manuscript/"$0}' manuscript/book.txt)


# Convertir a mas formatos
ebook-convert angular-ddd.epub angular-ddd.azw3
```
