import { Platform, StyleSheet } from 'react-native';
import PlatformEnum from './data/PlatformEnum';

/**
 *
 */
export const styles = StyleSheet.create({
  root: {},
  view: {},
  codeBlock: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 4,
  },
  codeInline: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 4,
  },
  del: {
    backgroundColor: '#000000',
  },
  em: {
    fontStyle: 'italic',
  },
  headingContainer: {
    flexDirection: 'row',
  },
  heading: {},
  heading1: {
    marginTop:10,
    fontSize: 32,
  },
  heading2: {
    marginTop:10,
    fontSize: 24,
  },
  heading3: {
    marginTop:10,
    fontSize: 18,
  },
  heading4: {
    marginTop:10,
    fontSize: 16,
  },
  heading5: {
    marginTop:10,
    fontSize: 13,
  },
  heading6: {
     marginTop:10,
    fontSize: 11,
  },
  hr: {
    backgroundColor: '#000000',
    height: 1,
  },
  blockquote: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 20,
    backgroundColor: '#CCCCCC',
  },
  inlineCode: {
    borderRadius: 3,
    borderWidth: 1,
    fontFamily: 'Courier',
    fontWeight: 'bold',
  },
  list: {},
  listItem: {
    flex: 1,
    flexWrap: 'wrap',
    // backgroundColor: 'green',
  },
  listUnordered: {},

  listUnorderedItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  listUnorderedItemIcon: {
    marginLeft: 10,
    marginRight: 10,
    ...Platform.select({
      [PlatformEnum.IOS]: {
        lineHeight: 25,
      },
      
      [PlatformEnum.WEB]: {
        lineHeight: 25,
      },
      
      [PlatformEnum.ANDROID]: {
        lineHeight: 25,
      },
    }),
  },
  listUnorderedItemText: {
    fontSize: 20,
    lineHeight: 20,
  },

  listOrdered: {},
  listOrderedItem: {
    flexDirection: 'row',
  },
  listOrderedItemIcon: {
    marginLeft: 10,
    marginRight: 10,
    ...Platform.select({
      [PlatformEnum.IOS]: {
        lineHeight: 25,
      },
      
      [PlatformEnum.WEB]: {
        lineHeight: 25,
      },      
      [PlatformEnum.ANDROID]: {
        lineHeight: 25,
      },
    }),
  },
  listOrderedItemText: {
    fontWeight: 'bold',
    lineHeight: 20,
  },
  paragraph: {
    marginTop:5,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },


  hardbreak: {
    width: '100%',
    height: 1,
  },
  strong: {
    fontWeight: 'bold',
  },
  table: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 3,
  },
  tableHeader: {},
  tableHeaderCell: {
    flex: 1,
    // color: '#000000',
    padding: 5,
    // backgroundColor: 'green',
  },
  tableRow: {
    borderBottomWidth: 1,
    borderColor: '#000000',
    flexDirection: 'row',
  },
  tableRowCell: {
    flex: 1,
    padding: 5,
  },
  text: {
    fontSize:15,
    fontWeight:"400",
    color:"#212121",
   
  },
  strikethrough: {
    textDecorationLine: 'line-through',
  },
  link: {
    textDecorationLine: 'underline',
  },
  blocklink: {
    flex: 1,
    borderColor: '#000000',
    borderBottomWidth: 1,

  },
  u: {
    borderColor: '#000000',
    borderBottomWidth: 1,
  },
  image: {
    flex: 1,
  },
});
