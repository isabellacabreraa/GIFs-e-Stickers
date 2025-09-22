
 # ☆* GIFs e Stickers *☆

Este repositório serve como um banco de dados simples, mas detalhado, de GIFs, stickers e imagens categorizadas. A ideia é fornecer uma coleção de mídias para uso em projetos web, aplicativos ou qualquer outra necessidade, com informações estruturadas e de fácil acesso.

---

## Estrutura do Projeto

O projeto consiste em um único arquivo JavaScript que contém um array de objetos. Cada objeto representa uma mídia (GIF, sticker ou imagem) com uma série de propriedades que descrevem seu conteúdo e características.

---

## Entidade de Dados

A principal entidade do projeto, `midias`, é um array de objetos JavaScript. Cada objeto segue esta estrutura:

| Campo | Tipo | Descrição |
| :--- | :--- | :--- |
| **id** | `number` | Identificador único para a mídia. |
| **nome** | `string` | Título ou breve descrição da mídia. |
| **categoria** | `string` | Categoria principal (ex: `reaction`, `meme`, `cute`, `anime`). |
| **origem** | `string` | Fonte original de onde a mídia foi obtida (ex: `Reddit`, `TikTok`, `Giphy`). |
| **tags** | `array` | Lista de palavras-chave que descrevem o sentimento ou tema da mídia (ex: `happy`, `sad`, `angry`). |
| **formato** | `string` | Formato do arquivo (ex: `GIF`, `PNG`, `JPEG`, `WEBP`). |
| **tamanho** | `string` | Tamanho do arquivo com a unidade de medida (ex: `"0.83 MB"`). |
| **downloads** | `number` | Número de downloads ou uso da mídia. |
| **dataCriacao** | `string` | Data de criação ou cadastro da mídia. |

