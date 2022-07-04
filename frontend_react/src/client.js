import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: '8pnizolv',
    dataset:'production',
    apiVersion:'2022-02-01',
    useCdn:true,
    token:'skHrojhoFcEMAes4HORvEBonBBSGmsnOngdA6SyI8Z1zDqtt2KAWgBv623NRypwOqblCYpn9k171LtgfcqrppK4e6cSykDEPV1uZBtUk1nd68Yls1bdkFCqP7ISZCKsLDFSs9nJuDAQ8SfmsZMYFea0LrzJTbnIT0AuCtE4cJAo7wQzXtKe0'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
