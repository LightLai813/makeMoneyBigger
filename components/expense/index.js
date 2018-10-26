import React from 'react';
import { Text, View, Picker, StatusBar, Button} from 'react-native';

const eType =  ['伙食費', '日常用品', '家庭花費', '交通費', '旅遊費', '投資理財', '娛樂社交', '運動健身', '理髮治裝', '電話費', '房租', '存爸爸', '孝親', '醫療', '政府稅金', '保險', '貸款', '社會公益','其他'];
const eSource =  ['現金','悠遊卡', '一卡通', '銀行｜國泰世華','銀行｜中華郵政','銀行｜王道銀行','信用卡｜國泰世華','信用卡｜中國信託','信用卡｜花旗','信用卡｜聯邦','信用卡｜樂天']

export default class expenseScreen extends React.Component {
    constructor(){
        super();

        this.state = {
            type: eType[0],
            source: eSource[0]
        }
    }

    render() {
      return (
            <View>
                <Text>支出項目</Text>   
                {
                     eType.map(item =>{
                         return (<Button
                            style={{ height: 50, width: 100 }}
                            onPress={()=>{console.log(item);}}
                            title={item}
                            accessibilityLabel="Learn more about this purple button"
                          />)
                     })
                } 

                <Text>支出單位</Text>    
                <Picker
                    selectedValue={this.state.source}
                    style={{ height: 50, width: 300 }}
                    onValueChange={(itemValue, itemIndex) => this.setState({source: itemValue})}>
                    { 
                        eSource.map(item => {
                            return (<Picker.Item label={item} value={item} />)
                        })
                    }
                </Picker>
            </View>

      );
    }
}