import React, { useState, useRef, useEffect } from 'react';
import { ButtonPrimary, ButtonSecondary } from "./components/ButtonUI";
import ChatBody from './ChatBody';
import moment from "moment";

export default function MessegersUI() {


    const Styles = {
        cardBody : {
            backgroundColor: "#000000",
        }
    };

    const StylesMessager = {
        chatBox: {
            minHeight: "200px",
            maxHeight: "45vh",
            overflowY: "auto",
            backgroundColor: "#f1f1f1", // Background color changed to #f1f1f1
        }
    };

    const [myChat, setMyChat] = useState([]);
    const [writeChat, setWriteChat] = useState("");
    const endOfMessagesRef = useRef(null);

    const chatArr = [
        {
            id: 1,
            message: "Jangan Berisik Kata Iki!",
            from: "A.Harahap",
            date: "2024-03-19 10:30:00"
        },
    ];

    const HandlerSendChat = (e) => {
        e.preventDefault();
        const objChat = {
            id: 2,
            message: writeChat,
            from: "Febry",
            date: moment().format('YYYY-MMM-DD HH:mm')
        }
        setMyChat([...myChat, objChat]);
        setWriteChat("");
    }

    useEffect(() => {
        scrollToBottom();
    }, [myChat]);

    const scrollToBottom = () => {
        endOfMessagesRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    };

    return (
        <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center py-3 px-4 bg-info ">
                <h3 className="card-title align-items-start flex-column">
                    <span className="fw-bold mb-2">A.Harahap</span>
                </h3>
                <div className="card-toolbar">
                    <ButtonSecondary items={{
                        title: "Create new chat",
                        btn_class: "btn-icon btn-clear",
                    }}>
                        <i className="bi bi-pencil-square"></i>
                    </ButtonSecondary>
                </div>
            </div>

            <div className="card-body p-0" style={Styles.cardBody}>
                <div
                    className="chat-message px-2"
                    style={StylesMessager.chatBox}
                >
                    <ChatBody data={chatArr.concat(myChat)} />
                    <div ref={endOfMessagesRef} />
                </div>

                <div className="chat-send bg-light p-3">
                    <form method="post" autoComplete="off" onSubmit={(e) => HandlerSendChat(e)} >
                        <div className="d-flex justify-content-between align-items-center">
                            <input
                                type="text"
                                className="form-control me-2"
                                autoFocus={true}
                                value={writeChat}
                                onChange={(e) => setWriteChat(e.target.value)} />

                            <ButtonPrimary items={{
                                title: "Send",
                                btn_class: "btn-icon btn-success",
                                type: "submit"
                            }}>
                                <i className="bi bi-send"></i>
                            </ButtonPrimary>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}