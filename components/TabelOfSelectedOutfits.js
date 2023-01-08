import {useSelector} from 'react-redux';
import React, {useEffect, useState} from 'react';

import {StyleSheet, View} from 'react-native';
import {Table, TableWrapper, Rows, Col} from 'react-native-table-component';

export default TableOfSelectedItems = () => {
  const {completeOutfits} = useSelector(state => state.userReducer);

  const clothesTypes = Object.keys(completeOutfits[0]);
  const clothesDetailsObj = Object.values(completeOutfits[0]);
  const clothesDetailsArr = clothesDetailsObj.map(e => Object.values(e));

  const [tableTitle, settableTitle] = useState([]);
  const [tableData, settableData] = useState([]);

  useEffect(() => {
    settableTitle(clothesTypes);
    settableData(clothesDetailsArr);
  }, [completeOutfits]);

  return (
    <View style={styles.container}>
      <Table borderStyle={{borderWidth: 1}}>
        <TableWrapper style={styles.wrapper}>
          <Col
            data={tableTitle}
            style={styles.title}
            heightArr={[28, 28]}
            // textStyle={styles.text}
          />
          <Rows
            data={tableData}
            flexArr={[2, 1, 1]}
            style={styles.row}
            // textStyle={styles.text}
          />
        </TableWrapper>
      </Table>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 350,
    flex: 1,
    padding: 10,
    paddingTop: 30,
    height: 50,
  },
  head: {height: 40, backgroundColor: '#f1f8ff'},
  wrapper: {flexDirection: 'row'},
  title: {flex: 1, backgroundColor: '#f6f8fa', textAlign: 'center'},
  row: {height: 28, textAlignVertical: 'center'},
  text: {textAlign: 'center'},
});
