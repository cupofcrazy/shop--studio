import S from '@sanity/desk-tool/structure-builder'
import { FcHome } from "react-icons/fc";
import { FcInfo } from "react-icons/fc";
import { FcSettings } from "react-icons/fc";


export default () =>
  S.list()

    // Doc List Title
    .title('Site Content.')
    .items([

      // Homepage Doc
      S.listItem()
      .title('Home')
      .icon(FcHome)
      .child(
        S.document()
        .schemaType('home')
      ),

      // Other Docs
      ...S.documentTypeListItems()
        .filter(listItem => !['home', 'about', 'settings']
        .includes(listItem.getId())),

      // Divider
      // S.divider(),
      
      // Info Doc
      S.listItem()
      .title('About')
      .icon(FcInfo)
      .child(
        S.document()
        .schemaType('about')
        ),
        S.divider(),
        
        // Settings Doc
        S.listItem()
        .title('Settings')
        .icon(FcSettings)
        .child(
          S.document()
          .schemaType('settings')
          ),
    ],
      
  )

