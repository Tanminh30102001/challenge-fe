<script>
import simplebar from 'simplebar-vue';
import 'simplebar/dist/simplebar.min.css';

export default {
    components: {
        simplebar,
    },
    mounted() {
        // chat
        var currentChatId = "users-chat";
        scrollToBottom(currentChatId);
        // // Scroll to Bottom
        function scrollToBottom(id) {
            setTimeout(function () {
                var simpleBar = document.getElementById(id).querySelector(
                    "#chat-conversation .simplebar-content-wrapper") ?
                    document.getElementById(id).querySelector(
                        "#chat-conversation .simplebar-content-wrapper") : '';

                var offsetHeight = document.getElementsByClassName("chat-conversation-list")[0] ?
                    document.getElementById(id).getElementsByClassName("chat-conversation-list")[0]
                        .scrollHeight - window.innerHeight + 600 : 0;

                if (offsetHeight)
                    simpleBar.scrollTo({
                        top: offsetHeight,
                        behavior: "smooth"
                    });
            }, 300);
        }
    },
};
</script>

<template>
    <BCard no-body class="card-height-100">
        <BCardHeader class="align-items-center d-flex py-0">
            <BCardTitle class="mb-0 flex-grow-1">Chat</BCardTitle>
            <div class="flex-shrink-0">
                <BDropdown variant="link" class="card-header-dropdown" toggle-class="text-reset dropdown-btn arrow-none"
                    menu-class="dropdown-menu-end" aria-haspopup="true"
                    :offset="{ alignmentAxis: -75, crossAxis: 0, mainAxis: 0 }">
                    <template #button-content><span class="text-muted"><i
                                class="ri-settings-4-line align-middle me-1"></i>Setting <i
                                class="mdi mdi-chevron-down ms-1"></i></span>
                    </template>
                    <BDropdownItem> <i class="ri-user-2-fill align-bottom text-muted me-2"></i> View Profile</BDropdownItem>
                    <BDropdownItem><i class="ri-inbox-archive-line align-bottom text-muted me-2"></i> Archive
                    </BDropdownItem>
                    <BDropdownItem><i class="ri-mic-off-line align-bottom text-muted me-2"></i> Muted</BDropdownItem>
                    <BDropdownItem><i class="ri-delete-bin-5-line align-bottom text-muted me-2"></i> Delete</BDropdownItem>
                </BDropdown>
            </div>
        </BCardHeader>

        <BCardBody class="p-0">
            <div id="users-chat">
                <simplebar class="chat-conversation p-3" id="chat-conversation" data-simplebar-auto-hide="false"
                    style="height: 400px;">
                    <ul class="list-unstyled chat-conversation-list chat-sm" id="users-conversation">
                        <li class="chat-list left">
                            <div class="conversation-list">
                                <div class="chat-avatar">
                                    <img src="@/assets/images/users/avatar-2.jpg" alt="">
                                </div>
                                <div class="user-chat-content">
                                    <div class="ctext-wrap">
                                        <div class="ctext-wrap-content">
                                            <p class="mb-0 ctext-content">Good morning 😊</p>
                                        </div>
                                        <BDropdown variant="link"
                                            class="card-header-dropdown align-self-start message-box-drop"
                                            toggle-class="text-reset dropdown-btn arrow-none" menu-class="dropdown-menu"
                                            aria-haspopup="true">
                                            <template #button-content> <i class="ri-more-2-fill"></i>
                                            </template>
                                            <BDropdownItem> <i class="ri-reply-line me-2 text-muted align-bottom"></i> Reply
                                            </BDropdownItem>
                                            <BDropdownItem><i class="ri-share-line me-2 text-muted align-bottom"></i>
                                                Forward
                                            </BDropdownItem>
                                            <BDropdownItem><i class="ri-file-copy-line me-2 text-muted align-bottom"></i>
                                                Copy</BDropdownItem>
                                            <BDropdownItem><i class="ri-bookmark-line me-2 text-muted align-bottom"></i>
                                                Bookmark</BDropdownItem>
                                            <BDropdownItem><i class="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>
                                                Delete</BDropdownItem>
                                        </BDropdown>
                                    </div>
                                    <div class="conversation-name"><small class="text-muted time">09:07 am</small> <span
                                            class="text-success check-message-icon"><i
                                                class="ri-check-double-line align-bottom"></i></span>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li class="chat-list right">
                            <div class="conversation-list">
                                <div class="user-chat-content">
                                    <div class="ctext-wrap">
                                        <div class="ctext-wrap-content">
                                            <p class="mb-0 ctext-content">Good morning, How are you?
                                                What about our next meeting?</p>
                                        </div>
                                        <BDropdown variant="link"
                                            class="card-header-dropdown align-self-start message-box-drop"
                                            toggle-class="text-reset dropdown-btn arrow-none" menu-class="dropdown-menu"
                                            aria-haspopup="true">
                                            <template #button-content> <i class="ri-more-2-fill"></i>
                                            </template>
                                            <BDropdownItem> <i class="ri-reply-line me-2 text-muted align-bottom"></i> Reply
                                            </BDropdownItem>
                                            <BDropdownItem><i class="ri-share-line me-2 text-muted align-bottom"></i>
                                                Forward
                                            </BDropdownItem>
                                            <BDropdownItem><i class="ri-file-copy-line me-2 text-muted align-bottom"></i>
                                                Copy</BDropdownItem>
                                            <BDropdownItem><i class="ri-bookmark-line me-2 text-muted align-bottom"></i>
                                                Bookmark</BDropdownItem>
                                            <BDropdownItem><i class="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>
                                                Delete</BDropdownItem>
                                        </BDropdown>
                                    </div>
                                    <div class="conversation-name"><small class="text-muted time">09:08 am</small> <span
                                            class="text-success check-message-icon"><i
                                                class="ri-check-double-line align-bottom"></i></span>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li class="chat-list left">
                            <div class="conversation-list">
                                <div class="chat-avatar">
                                    <img src="@/assets/images/users/avatar-2.jpg" alt="">
                                </div>
                                <div class="user-chat-content">
                                    <div class="ctext-wrap">
                                        <div class="ctext-wrap-content">
                                            <p class="mb-0 ctext-content">Yeah everything is fine.
                                                Our next meeting tomorrow at 10.00 AM</p>
                                        </div>
                                        <BDropdown variant="link"
                                            class="card-header-dropdown align-self-start message-box-drop"
                                            toggle-class="text-reset dropdown-btn arrow-none" menu-class="dropdown-menu"
                                            aria-haspopup="true">
                                            <template #button-content> <i class="ri-more-2-fill"></i>
                                            </template>
                                            <BDropdownItem> <i class="ri-reply-line me-2 text-muted align-bottom"></i> Reply
                                            </BDropdownItem>
                                            <BDropdownItem><i class="ri-share-line me-2 text-muted align-bottom"></i>
                                                Forward
                                            </BDropdownItem>
                                            <BDropdownItem><i class="ri-file-copy-line me-2 text-muted align-bottom"></i>
                                                Copy</BDropdownItem>
                                            <BDropdownItem><i class="ri-bookmark-line me-2 text-muted align-bottom"></i>
                                                Bookmark</BDropdownItem>
                                            <BDropdownItem><i class="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>
                                                Delete</BDropdownItem>
                                        </BDropdown>
                                    </div>
                                    <div class="ctext-wrap">
                                        <div class="ctext-wrap-content">
                                            <p class="mb-0 ctext-content">Hey, I'm going to meet a
                                                friend of mine at the department store. I have to
                                                buy some presents for my parents 🎁.</p>
                                        </div>
                                        <BDropdown variant="link"
                                            class="card-header-dropdown align-self-start message-box-drop"
                                            toggle-class="text-reset dropdown-btn arrow-none" menu-class="dropdown-menu"
                                            aria-haspopup="true">
                                            <template #button-content> <i class="ri-more-2-fill"></i>
                                            </template>
                                            <BDropdownItem> <i class="ri-reply-line me-2 text-muted align-bottom"></i> Reply
                                            </BDropdownItem>
                                            <BDropdownItem><i class="ri-share-line me-2 text-muted align-bottom"></i>
                                                Forward
                                            </BDropdownItem>
                                            <BDropdownItem><i class="ri-file-copy-line me-2 text-muted align-bottom"></i>
                                                Copy</BDropdownItem>
                                            <BDropdownItem><i class="ri-bookmark-line me-2 text-muted align-bottom"></i>
                                                Bookmark</BDropdownItem>
                                            <BDropdownItem><i class="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>
                                                Delete</BDropdownItem>
                                        </BDropdown>
                                    </div>
                                    <div class="conversation-name"><small class="text-muted time">09:10 am</small> <span
                                            class="text-success check-message-icon"><i
                                                class="ri-check-double-line align-bottom"></i></span>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li class="chat-list right">
                            <div class="conversation-list">
                                <div class="user-chat-content">
                                    <div class="ctext-wrap">
                                        <div class="ctext-wrap-content">
                                            <p class="mb-0 ctext-content">Wow that's great</p>
                                        </div>
                                        <BDropdown variant="link"
                                            class="card-header-dropdown align-self-start message-box-drop"
                                            toggle-class="text-reset dropdown-btn arrow-none" menu-class="dropdown-menu"
                                            aria-haspopup="true">
                                            <template #button-content> <i class="ri-more-2-fill"></i>
                                            </template>
                                            <BDropdownItem> <i class="ri-reply-line me-2 text-muted align-bottom"></i> Reply
                                            </BDropdownItem>
                                            <BDropdownItem><i class="ri-share-line me-2 text-muted align-bottom"></i>
                                                Forward
                                            </BDropdownItem>
                                            <BDropdownItem><i class="ri-file-copy-line me-2 text-muted align-bottom"></i>
                                                Copy</BDropdownItem>
                                            <BDropdownItem><i class="ri-bookmark-line me-2 text-muted align-bottom"></i>
                                                Bookmark</BDropdownItem>
                                            <BDropdownItem><i class="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>
                                                Delete</BDropdownItem>
                                        </BDropdown>
                                    </div>
                                    <div class="conversation-name"><small class="text-muted time">09:12 am</small> <span
                                            class="text-success check-message-icon"><i
                                                class="ri-check-double-line align-bottom"></i></span>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li class="chat-list left">
                            <div class="conversation-list">
                                <div class="chat-avatar">
                                    <img src="@/assets/images/users/avatar-2.jpg" alt="">
                                </div>
                                <div class="user-chat-content">
                                    <div class="ctext-wrap">
                                        <div class="message-img mb-0">
                                            <div class="message-img-list">
                                                <div>
                                                    <BLink class="popup-img d-inline-block"
                                                        href="@/assets/images/small/img-1.jpg">
                                                        <img src="@/assets/images/small/img-1.jpg" alt=""
                                                            class="rounded border">
                                                    </BLink>
                                                </div>
                                                <div class="message-img-link">
                                                    <ul class="list-inline mb-0">
                                                        <li class="list-inline-item dropdown">
                                                            <BLink class="dropdown-toggle" href="#" role="button"
                                                                data-bs-toggle="dropdown" aria-haspopup="true"
                                                                aria-expanded="false">
                                                                <i class="ri-more-fill"></i>
                                                            </BLink>
                                                            <div class="dropdown-menu">
                                                                <BLink class="dropdown-item"
                                                                    href="@/assets/images/small/img-1.jpg" download="">
                                                                    <i
                                                                        class="ri-download-2-line me-2 text-muted align-bottom"></i>Download
                                                                </BLink>
                                                                <BLink class="dropdown-item" href="#"><i
                                                                        class="ri-reply-line me-2 text-muted align-bottom"></i>Reply
                                                                </BLink>
                                                                <BLink class="dropdown-item" href="#"><i
                                                                        class="ri-share-line me-2 text-muted align-bottom"></i>Forward
                                                                </BLink>
                                                                <BLink class="dropdown-item" href="#"><i
                                                                        class="ri-bookmark-line me-2 text-muted align-bottom"></i>Bookmark
                                                                </BLink>
                                                                <BLink class="dropdown-item delete-item" href="#"><i
                                                                        class="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>Delete
                                                                </BLink>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div class="message-img-list">
                                                <div>
                                                    <BLink class="popup-img d-inline-block"
                                                        href="@/assets/images/small/img-2.jpg">
                                                        <img src="@/assets/images/small/img-2.jpg" alt=""
                                                            class="rounded border">
                                                    </BLink>
                                                </div>
                                                <div class="message-img-link">
                                                    <ul class="list-inline mb-0">
                                                        <li class="list-inline-item dropdown">
                                                            <BLink class="dropdown-toggle" href="#" role="button"
                                                                data-bs-toggle="dropdown" aria-haspopup="true"
                                                                aria-expanded="false">
                                                                <i class="ri-more-fill"></i>
                                                            </BLink>
                                                            <div class="dropdown-menu">
                                                                <BLink class="dropdown-item"
                                                                    href="@/assets/images/small/img-2.jpg" download="">
                                                                    <i
                                                                        class="ri-download-2-line me-2 text-muted align-bottom"></i>Download
                                                                </BLink>
                                                                <BLink class="dropdown-item" href="#"><i
                                                                        class="ri-reply-line me-2 text-muted align-bottom"></i>Reply
                                                                </BLink>
                                                                <BLink class="dropdown-item" href="#"><i
                                                                        class="ri-share-line me-2 text-muted align-bottom"></i>Forward
                                                                </BLink>
                                                                <BLink class="dropdown-item" href="#"><i
                                                                        class="ri-bookmark-line me-2 text-muted align-bottom"></i>Bookmark
                                                                </BLink>
                                                                <BLink class="dropdown-item delete-item" href="#"><i
                                                                        class="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>Delete
                                                                </BLink>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="conversation-name"><small class="text-muted time">09:30 am</small> <span
                                            class="text-success check-message-icon"><i
                                                class="ri-check-double-line align-bottom"></i></span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </simplebar>
            </div>
            <div class="border-top border-top-dashed">
                <BRow class="g-2 mx-3 mt-2 mb-3">
                    <BCol>
                        <div class="position-relative">
                            <input type="text" class="form-control border-light bg-light" placeholder="Enter Message...">
                        </div>
                    </BCol>
                    <div class="col-auto">
                        <BButton type="submit" variant="info"><span class="d-none d-sm-inline-block me-2">Send</span>
                            <i class="mdi mdi-send float-end"></i>
                        </BButton>
                    </div>
                </BRow>
            </div>
        </BCardBody>
    </BCard>
</template>