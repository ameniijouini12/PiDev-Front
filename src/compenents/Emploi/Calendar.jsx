import React from "react";
import axios from 'axios';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import list from "@fullcalendar/list";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction"; // needed for dayClick
//import RemoveUpdateForm from "./RemoveUpdate";
import { INITIAL_EVENTS, createEventId } from './event-utils'
import moment from "moment";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "react-uuid";
import './style.css'

let tooltipInstance = null;

const milliseconds = 1575909015 * 1000;

const end_mil = 1575979200 * 1000;

export default class PageCalendar extends React.Component {
  calendarComponentRef = React.createRef();
  constructor(props) {
    super(props);
    this.state = {
      end: new Date(end_mil),
      current_date: new Date(milliseconds),
      calendarWeekends: true,
      calendarEvents: [
        // initial event data
        { title: "Event Now", start: new Date() }
      ],
      eventsCollection: [],

      
      closed_update: false,
      closed: false,
      event_start: "",
      event_end: "",
      selectionInfo: {},
      event_id: ""
      
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.openForm = this.openForm.bind(this);
    this.itemfunc = this.itemfunc.bind(this);
    this.handleeventDrop = this.handleeventDrop.bind(this);
    this.handleeventResize = this.handleeventResize.bind(this);
    this.handleOpenUpdate = this.handleOpenUpdate.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
    this.handleRemoveUpdate = this.handleRemoveUpdate.bind(this);
    this.handleeventRecieve = this.handleeventRecieve.bind(this);
   }

  openForm = e => {
    this.setState({
      closed: !this.state.closed
    });
  };

  handleOpenUpdate = e => {
    this.setState({
      closed_update: !this.state.closed_update
    });
  };

  componentDidMount() {
    axios.get('http://localhost:4000/')
    .then(res => {
        this.setState({ eventsCollection: res.data });
        console.log("eventsCollection: ", this.state.eventsCollection)
    })
    .catch(function (error) {
        console.log(error);
    });

    let draggableEl = document.getElementById("external-events");
    new Draggable(draggableEl, {
      itemSelector: ".fc-event",
      eventData: function(eventEl) {
        let title = eventEl.getAttribute("title");
        let id = eventEl.getAttribute("id");
        return {
          title: title,
          id: id,
          
          create: false
        };
      }
    });
  }
 
 

  handleRemoveUpdate = (eventClickInfo, e) => {
    console.log("remove update called");
    console.log(eventClickInfo.event);

    this.setState({
      event_id: eventClickInfo.event
    });

    this.handleOpenUpdate(e);
  };

  handleeventResize = eventResizeInfo => {
    const { calendarEvents } = this.state;

    this.setState({
      calendarEvents: calendarEvents.map(event =>
        event.id === eventResizeInfo.event.id
          ? Object.assign({}, event, {
              start: eventResizeInfo.event.start,
              end: eventResizeInfo.event.end
            })
          : event
      )
    });
  };

  handleeventDrop = eventDropInfo => {
    console.log("event dropped");
    console.log(eventDropInfo.event);
    const { calendarEvents } = this.state;
    // for each cal event
    // if the calendar contains an event with the same id, create a duplicate with new start and end times
    // else return the unmodified event
    this.setState({
      calendarEvents: calendarEvents.map(event =>
        event.id === eventDropInfo.event.id
          ? Object.assign({}, event, {
              start: eventDropInfo.event.start,
            })
          : event
      )
    });
  };
  handleSelect = (selectionInfo, e) => {
    //e.preventDefault();
    //const { opened } = this.state;
    console.log("handle select called");
    console.log(selectionInfo);

    //
    this.setState({
      selectionInfo: selectionInfo
    });

    this.openForm(e);
    //
    //     // this.setState ({
    //     //   opened: !this.state.opened  });
    //
    //   //return (<div>{this.state.opened ? alert("Hi"+" "+group+" "+time):console.log("bye")}</div>)
    //
  };

  itemfunc(id, detail, onDateTimeStart, onDateTimeEnd) {
    const calendarEvents = this.state;

    //
    // this.setState({
    //
    //  items:items
    //
    // }
    // )

    this.setState({
      calendarEvents: this.state.calendarEvents.concat({
        // creates a new array
        title: detail.label,
        start: onDateTimeStart,
        end: onDateTimeEnd,
        id: id
      })
    });

    return this.state.calendarEvents;
  }

  handleeventRecieve = info => {
    console.log("event recv");
    console.log(info);
    const id = uuid();
    info.draggedEl.hidden=true
    const newEvent = {
      title: info.draggedEl.getAttribute("title"),
      start: info.date,
      end: new Date(
        moment(info.date)
          .add(1, "hour")
          .valueOf()
      ),
      id: id,
   
    };
    this.setState({
      calendarEvents: this.state.calendarEvents.concat(newEvent)
    });

    return;
  };
  handleRemoveItem = event => {
    console.log("event clicked");
    console.log(event);
    const id = event.id;
    console.log(id);

    // const { calendarEvents } = this.state;

    // //it used to be itemremove_info, but I have replaced it with the item_info
    // calendarEvents.forEach((item, i) => {
    //   if (item.id === id) {
    //     var index = calendarEvents.indexOf(item);
    //     calendarEvents.splice(index, 1);
    //   }
    // });
    // // console.log(items)
    // //
    // this.setState({ calendarEvents: calendarEvents });
    // console.log(calendar);
    // calendar.getEventById(id).remove();
  };

  render() {
    console.log("Rerender");
    console.log(this.state.calendarEvents);
    // console.log(this.state.event_id);
    return (
      <>
       
       <div class="container">
  <div class="row">
    <div className="col-sm-2">
        <div className='demo-app-sidebar' style={{
                margin: "20px",
                padding: "10px",
                width: "100%"
              }}>
        <div className='demo-app-sidebar-section '>
        
            <div
              id="external-events"
              
            >
              <p align="center">
                <strong> Events</strong>
              </p>
              {this.state.eventsCollection.map(event => (
                <div
                
                  className="fc-event event_inner draggable-item draggable-header draggable-source "
              
                  title={event.title}
                  data={event.id}
                  key={event.id}                 
                >
                  <strong>{event.title} </strong>
                  <p></p>
                  
                </div>
              ))}
            </div>
            </div></div>
         </div>
         <div className="col-10">
            <div className="calendar">
              <FullCalendar
                themeSystem={'bootstrap'}
                droppable={true}
                eventResize={this.handleeventResize}
                eventDrop={this.handleeventDrop}
                drop={this.handleeventRecieve}
                select={this.handleDateSelect}
                timeFormat="H(:mm)"
                minTime={"07:00:00"}
                maxTime={"19:00:00"}
                initialView='timeGridWeek'

                //eventRender={(info)=>console.log("hi")}
                validRange={{
                  start: this.state.current_date
                }}
                headerToolbar={{
                  left: 'prev,next today',
                  center: 'title',
                  right: 'dayGridMonth,timeGridWeek,timeGridDay'
                }}
                rerenderDelay={10}
                eventDurationEditable={true}
                plugins={[
                  dayGridPlugin,
                  timeGridPlugin,
                  list,
                  interactionPlugin
                ]}
                ref={this.calendarComponentRef}
                weekends={this.state.calendarWeekends}
                events={this.state.calendarEvents}
                initialEvents={INITIAL_EVENTS} 
                dateClick={this.handleDateClick}
                //currentDate={this.visibleRange}
                defaultDate={this.state.current_date}
                editable={true}
                selectable={true}
                eventClick={this.handleRemoveUpdate}
                navLinks= {true}
                event={"eventMouseover"}
                eventMouseover ={
                  function(calEvent, jsEvent, view) { console.log('mouseover', calEvent); }
                }
              />
            </div>
            </div>
            </div>
            </div>
        
      </>
    );
  }

  toggleWeekends = () => {
    this.setState({
      // update a property
      calendarWeekends: !this.state.calendarWeekends
    });
  };
  // removeevent=()=>{
  //   let calendarApi = this.calendarComponentRef.current.getApi();
  //   calendarApi.remove.event();
  // }
  gotoPast = () => {
    let calendarApi = this.calendarComponentRef.current.getApi();
    calendarApi.gotoDate("2020-01-01"); // call a method on the Calendar object
  };

  // handleDateClick = arg => {
  //   console.log(arg)
  //   if (window.confirm("Would you like to add an event to " + arg.dateStr + " ?")) {
  //     this.setState({
  //       // add new event data
  //       calendarEvents: this.state.calendarEvents.concat({
  //         // creates a new array
  //         title: "New Event",
  //         start: arg.date,
  //         end:arg.date,
  //         allDay: arg.allDay
  //       })
  //     });
  //   }
  // };
}
