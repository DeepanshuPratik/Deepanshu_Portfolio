export default{
    name: 'education',
    title: 'Education',
    type: 'document',
    fields: [
        {
            name: 'imageurl',
            title: 'ImgLogo',
            type: 'image',
            options : {
                hotspot: true,
            }
        },
        {
            name: 'degree',
            title: 'Degree',
            type: 'string'
        },
        {
            name: 'field',
            title: 'Field',
            type: 'string'
        },
        {
            name: 'institute',
            title: 'Institute',
            type: 'string'
        },
        {
            name: 'grade',
            title: 'Grade',
            type: 'string'
        },
    ],    
}