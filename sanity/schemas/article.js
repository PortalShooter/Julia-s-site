export default {
    name: 'article',
    type: 'document',
      title: 'Article',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Название статьи'
      },
      {
        name: 'description',
        type: 'string',
        title: 'Описание статьи'
      },
      {
        name: 'img',
        type: 'image',
        title: 'Картинка',
        options: {
          hotspot: true
        }
      },
      {
        name: 'link',
        type: 'url',
        title: 'Ссылка на статью'
      }
    ]
  }