"use client"
import {defineField, defineType} from 'sanity'


export const blog = defineType( {
    name: 'blog',
    title: 'Blog',
    type: 'document',
    fields: [
        defineField(
        {
        name: 'title',
        title: 'Blog title',
        type: 'string',
    }), 
    defineField({
        name: 'paragraph',
        title: 'Paragraph',
        type: 'text',
    }),
    defineField({
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options:{
            source:'title',
        }
    }),
    defineField({
        name: 'image',
        title: 'Upload Image',
        type: 'image',
        options:{
            hotspot:true
        }
    }),
    defineField({
        name: 'block',
        title:'Blog Content',
        type: 'array',
        of: [{type:'block'}]
    }),

]})