import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Button, Message, Command, ActionReply, MessageWithWait, Intent } from 'app/models/intent-model';
import { ELEMENTS_LIST, ACTIONS_LIST, TYPE_ACTION, TYPE_COMMAND, TYPE_RESPONSE, TYPE_BUTTON, TYPE_URL, TYPE_MESSAGE, generateShortUID } from 'app/chatbot-design-studio/utils';
import { LoggerService } from 'app/services/logger/logger.service';

import { ControllerService } from 'app/chatbot-design-studio/services/controller.service';
// import { IntentService } from 'app/chatbot-design-studio/services/intent.service';

@Component({
  selector: 'cds-action-reply',
  templateUrl: './cds-action-reply.component.html',
  styleUrls: ['./cds-action-reply.component.scss']
})
export class CdsActionReplyComponent implements OnInit {

  @ViewChild('scrollMe', { static: false }) scrollContainer: ElementRef;
  translateY: string;

  @Input() action: ActionReply;
  @Input() intentSelected: Intent;
  @Output() updateAndSaveAction = new EventEmitter();
  

  idIntentSelected: string;
  idAction: string;


  response: MessageWithWait;
  openCardButton: boolean = false;
  buttonSelected: Button;
  newButton: boolean = false;

  typeCommand = TYPE_COMMAND;
  typeResponse = TYPE_RESPONSE;
  typeMessage = TYPE_MESSAGE;
  typeActions = TYPE_ACTION;
  actionList = ACTIONS_LIST;
  intentName: string;
  intentNameResult: boolean;
  textGrabbing: boolean;
  arrayResponses: Array<Command>;
  arrayMessagesWithWait: Array<MessageWithWait>;

  typeAction: string;

  element: any;
  showTip: boolean = true;
  descriptionTooltip: string = "";
  dataInput: string;
  tipText: string;
  titlePlaceholder: string;

  TypeMessage = TYPE_MESSAGE;

  constructor(
    private logger: LoggerService,
    private controllerService: ControllerService
  ) { }

  manageTooltip(){}
  onChangeText(event){}
  addElement(event){}


  // SYSTEM FUNCTIONS //
  ngOnInit(): void {
    console.log('ActionReplyComponent ngOnInit', this.action);
    // // console.log('ngOnInit panel-response::: ', this.typeAction);
    this.typeAction = (this.typeAction === TYPE_ACTION.RANDOM_REPLY ? 'RANDOM_REPLY' : 'REPLY');
    try {
      this.element = ELEMENTS_LIST.find(item => item.type === this.action._tdActionType);
      if(this.action._tdActionTitle && this.action._tdActionTitle != ""){
        this.dataInput = this.action._tdActionTitle;
      }
      console.log('ActionDescriptionComponent action:: ', this.element);
    } catch (error) {
      this.logger.log("error ", error);
    }

    this.initialize();

  }



  ngOnChanges(changes: SimpleChanges): void {
    // console.log('ActionReplyComponent ngOnChanges:: ', this.connector);
    // if (changes.connector) {
    //   this.updateConnector();
    // }
  }






  // CUSTOM FUNCTIONS //
  /** */
  private initialize() {
    this.idIntentSelected = this.intentSelected.intent_id;
    this.action._tdActionId = this.action._tdActionId?this.action._tdActionId:generateShortUID();
    this.idAction = this.idIntentSelected+'/'+this.action._tdActionId;

    this.openCardButton = false;
    this.arrayResponses = [];
    this.arrayMessagesWithWait = [];
    this.intentName = '';
    this.intentNameResult = true;
    this.textGrabbing = false;
    if (this.action) {
      try {
        this.arrayResponses = this.action.attributes.commands;
      } catch (error) {
        this.logger.log('error:::', error);
      }
    }
    this.generateCommandsOfElements();
    this.scrollToBottom();
  }






  /** */
  private generateCommandsWithWaitOfElements() {
    let replyArrayElements: Array<Command> = [];
    let textConversation: string = '';
    this.arrayMessagesWithWait.forEach(el => {
      if (el.time && el.time > 0) {
        let elementWait = new Command(TYPE_COMMAND.WAIT);
        elementWait.time = el.time;
        replyArrayElements.push(elementWait);
      }
      let elementMessage = new Command(TYPE_COMMAND.MESSAGE);
      elementMessage.message = new Message(el.type, el.text);
      if (el.attributes) {
        elementMessage.message.attributes = el.attributes;
      }
      if (el.metadata) {
        elementMessage.message.metadata = el.metadata;
      }
      if(el._tdJSONCondition){
        elementMessage.message._tdJSONCondition = el._tdJSONCondition
      }
      replyArrayElements.push(elementMessage);
      if (el.text) {
        textConversation += el.text + '\r\n'
      }
    });
    this.action.text = textConversation;
    this.action.attributes.commands = replyArrayElements;
  }

  /** */
  private generateCommandsOfElements() {
    var time = 500;
    try {
      this.arrayResponses.forEach(element => {
        if (element.type === TYPE_COMMAND.WAIT) {
          time = element.time;
        }
        if (element.type === TYPE_COMMAND.MESSAGE) {
          let message = new MessageWithWait(element.message.type, element.message.text, time);
          if (element.message.attributes) {
            message.attributes = element.message.attributes;
          }
          if (element.message.metadata) {
            message.metadata = element.message.metadata;
          }
          if(element.message._tdJSONCondition){
            message._tdJSONCondition = element.message._tdJSONCondition
          }
          this.logger.log('MessageWithWait:::', message);
          this.arrayMessagesWithWait.push(message);

          time = 0;
        }
      });
    } catch (error) {
      this.logger.log(error);
    }
  }


  /** */
  scrollToBottom(): void {
    setTimeout(() => {
      try {
        this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
        this.scrollContainer.nativeElement.animate({ scrollTop: 0 }, '500');
      } catch (error) {
        this.logger.log('scrollToBottom ERROR: ', error);
      }
    }, 300);
  }


  /** */
  onAddNewActionReply(element) {
    this.logger.log('onAddNewActionReply: ', element);
    try {
      let message = new MessageWithWait(element.message.type, element.message.text, 500);
      if (element.message.attributes) {
        message.attributes = element.message.attributes;
      }
      if (element.message.metadata) {
        message.metadata = element.message.metadata;
      }
      this.arrayMessagesWithWait.push(message);
      // this.reply.attributes.commands.push(element);
      this.scrollToBottom();
    } catch (error) {
      this.logger.log('onAddNewResponse ERROR', error);
    }
  }

  




  // EVENT FUNCTIONS //
  /** */
  mouseDown() {
    this.textGrabbing = true;
  }

  /** */
  mouseUp() {
    this.textGrabbing = false;
  }

  /** */
  drop(event: CdkDragDrop<string[]>) {
    this.textGrabbing = false;
    moveItemInArray(this.arrayMessagesWithWait, event.previousIndex, event.currentIndex);
    this.generateCommandsWithWaitOfElements();
  }


  /** onChangingReplyAction */
  onChangeActionReply() {
    this.logger.log('onChangeActionReply ************', this.intentSelected, this.arrayMessagesWithWait);
    this.generateCommandsWithWaitOfElements();
    this.updateAndSaveAction.emit();
  }

  /** onChangeDelayTimeReplyAction */
  // onChangeDelayTimeReplyAction() {
  //   this.logger.log('onChangeDelayTimeReplyAction ************', this.arrayMessagesWithWait);
  //   this.generateCommandsWithWaitOfElements();
  //   this.updateAndSaveAction.emit();
  // }

  /** onDeleteActionReply */
  onDeleteActionReply(index: number) {
    console.log('onDeleteActionReply: ', index);
    this.arrayMessagesWithWait.splice(index, 1);
    this.generateCommandsWithWaitOfElements();
    this.updateAndSaveAction.emit();
  }

  /** onCreateNewButton */
  onCreateNewButton(event){
    this.response = event.refResponse;
    this.newButton = true;
    this.buttonSelected = this.createNewButton();
    this.generateCommandsWithWaitOfElements();
    this.updateAndSaveAction.emit();
  }







  /** */
  onMoveUpResponse(index: number) {
    if (index > 0) {
      let to = index - 1;
      let from = index;
      this.arrayMessagesWithWait.splice(to, 0, this.arrayMessagesWithWait.splice(from, 1)[0]);
      this.generateCommandsWithWaitOfElements();
    }
  }

  /** */
  onMoveDownResponse(index: number) {
    if (index < this.arrayMessagesWithWait.length - 1) {
      let to = index + 1;
      let from = index;
      this.arrayMessagesWithWait.splice(to, 0, this.arrayMessagesWithWait.splice(from, 1)[0]);
      this.generateCommandsWithWaitOfElements();
    }
  }





  /** */
  onChangeIntentName(name: string) {
    name.toString();
    try {
      this.intentName = name.replace(/[^A-Z0-9_]+/ig, "");
    } catch (error) {
      this.logger.log('name is not a string', error)
    }
  }

  /** */
  onBlurIntentName(name: string) {
    this.intentNameResult = true;
  }


  /** */
  onDisableInputMessage() {
    try {
      this.action.attributes.disableInputMessage = !this.action.attributes.disableInputMessage;
    } catch (error) {
      this.logger.log("Error: ", error);
    }
  }





  private createNewButton() {
    const idButton = generateShortUID();
    const idActionConnector = this.idAction+'/'+idButton;
    let buttonSelected = {
      'uid': idButton,
      'idConnector': idActionConnector,
      'isConnected': false,
      'value': 'Button',
      'type': TYPE_BUTTON.TEXT,
      'target': TYPE_URL.BLANK,
      'link': '',
      'action': '',
      'show_echo': true
    };
    this.response.attributes.attachment.buttons.push(buttonSelected);
    return buttonSelected;
  }


  onDeleteButton(){
    this.updateAndSaveAction.emit();
  }

  /** appdashboard-button-configuration-panel: onOpenButtonPanel */
  onOpenButtonPanel(event) {
    console.log('onOpenButtonPanel 2 :: ', event);
    this.response = event.refResponse;
    this.newButton = false;
    this.buttonSelected = event.button;
    console.log('buttonSelected :: ', this.buttonSelected);
    this.controllerService.openButtonPanel(this.buttonSelected);
  }

  /** appdashboard-button-configuration-panel: Save button */
  onSaveButton(button) {
    this.logger.log('onSaveButton :: ', button, this.response);
    this.generateCommandsWithWaitOfElements();
  }

  /** appdashboard-button-configuration-panel: Close button panel */
  onCloseButtonPanel() {
    this.logger.log('onCloseButtonPanel :: ');
    this.openCardButton = false;
  }

  onFocusOutEvent(event) {
    // this.logger.log('onFocusOutEvent ::::::: ', event);
    // this.onCloseButtonPanel()
  }



  
}
