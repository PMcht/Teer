import { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, useWindowDimensions} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import moment from 'moment'
import 'moment/locale/fr';
import { ScrollView } from 'react-native-gesture-handler';

const Calendar = ({ onSelectDate, selected }) => {
  const [dates, setDates] = useState([])
  const [scrollPosition, setScrollPosition] = useState(0)
  const [currentMonth, setCurrentMonth] = useState()

  moment.locale('fr');

  const getDates = () => {
    const _dates = []
    for (let i = 0; i < 10; i++) {
      const date = moment().add(i, 'days')
      _dates.push(date)
    }
    setDates(_dates)
  }

  useEffect(() => {
    getDates()
  }, [])



  return (
    <>
      <View>
        <Text style={styles.title}>Sélectionner une date</Text>
      </View>
      <View style={styles.dateSection}>
        <View style={styles.scroll}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            onScroll={(e) => setScrollPosition(e.nativeEvent.contentOffset.x)}
            scrollEventThrottle={16}
          >
            {dates.map((date, index) => (
              <Date
                key={index}
                date={date}
                onSelectDate={onSelectDate}
                selected={selected}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </>
  )
}

export default Calendar


const Date = ({ date, onSelectDate, selected }) => {
    const day = moment(date).format('YYYY-MM-DD') === moment().format('YYYY-MM-DD') ? 'Auj.' : moment(date).format('ddd').charAt(0).toUpperCase() + moment(date).format('ddd').slice(1)
    const dayNumber = moment(date).format('DD')
  
    const fullDate = moment(date).format('DD') + ' ' + moment(date).format('MMM').charAt(0).toUpperCase() + moment(date).format('MMM').slice(1)
    return (
      <TouchableOpacity
        onPress={() => onSelectDate(fullDate)}
        style={[styles.card, selected === fullDate && { backgroundColor: "#2ba9bc" }]}
      >
        <Text
          style={[styles.big, selected === fullDate && { color: "#fff" }]}
        >
          {day}
        </Text>
        <View style={{ height: 10 }} />
        <Text
          style={[
            styles.medium,
            selected === fullDate && { color: "#fff", fontWeight: 'bold' },
          ]}
        >
          {dayNumber}
        </Text>
      </TouchableOpacity>
    )
  }


  export const Hours = ({ selectedHour, setSelectedHour }) => {
    const [hours, setHours] = useState([])
    const [scrollPosition, setScrollPosition] = useState(0)
  
    moment.locale('fr');
  
    const getHours = () => {
      const _hours = []
      for (let i = 0; i < 40; i++) {
        const hour = moment('2016-03-12 08:00:00').add(i*15, 'minutes').format('HH:mm')
        _hours.push(hour)
      }
      setHours(_hours)
    }
  
    useEffect(() => {
      getHours()
    }, [])
  
  
  
    return (
      <>
        <View style={styles.HourSection}>
          <View style={styles.scroll}>
            <ScrollView
              onScroll={(e) => setScrollPosition(e.nativeEvent.contentOffset.x)}
              scrollEventThrottle={16}
            >
              {hours.map((hour, index) => (
                <Hour
                  key={index}
                  hour={hour}
                  setHours={setHours}
                  selectedHour={selectedHour}
                  setSelectedHour={setSelectedHour}
                />
              ))}
            </ScrollView>
          </View>
        </View>
      </>
    )
  }


  const Hour = ({ hour, setSelectedHour, selectedHour, setHours }) => {

    const {height, width, scale, fontScale} = useWindowDimensions();

       return (
        <>
          <View style={selectedHour == hour ? '' : styles.line} />
          <TouchableOpacity
            onPress={() => (setSelectedHour(hour), setHours([hour]))}
            style={[styles.hour, selectedHour === hour]}
          >
            <Text
              style={[styles.medium, selectedHour === hour]}
            >
              {hour}
            </Text>
            <View style={styles.iconContainer}>
                <MaterialCommunityIcons style={styles.Icon} name='account' />
                <MaterialCommunityIcons style={styles.Icon} name='account' />
                <MaterialCommunityIcons style={styles.Icon} name='account' />
                <MaterialCommunityIcons style={styles.Icon} name='account' />
            </View>
            <Text
              style={[styles.big]}
            >
              70€
            </Text>
          </TouchableOpacity>
      </>
    )
  }


const styles = StyleSheet.create({
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  dateSection: {
    width: '100%',
    paddingVertical: 20,
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee',
    borderRadius: 10,
    borderColor: '#ddd',
    alignItems: 'center',
    height: 60,
    width: 60,
    marginHorizontal: 5,
  },
  big: {
    fontSize: 15,
    marginBottom: 0,
    lineHeight: 16
  },
  medium: {
    fontSize: 20,
    lineHeight: 20,
    fontWeight: 'bold'
  },

  HourSection: {
    width: '100%',

    maxHeight: 300
  },
  hour:{
    paddingVertical: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  line: {
    borderWidth: 1,
    borderColor: '#eee'
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
    marginTop: -2,
  },
  Icon:{
    fontSize: 20,
    lineHeight: 20,
    marginRight: 1
  }
})