// ===== 題庫資料 (100題) =====
const questionBank = [
    { id: 1, section: 1, question: "During a Sprint Planning meeting, the Product Owner insists that 10 high-priority features must be completed in the upcoming Sprint to meet a marketing deadline. However, the Developers calculate their capacity and state they can only complete 6 features. What is the best action for the Scrum Master to take?", options: ["Tell the Developers to work overtime because the marketing deadline is critical for the business.", "Advise the Product Owner that the Developers alone decide how much work they can take into a Sprint.", "Allow the Product Owner to assign the 10 features to individual team members to ensure commitment.", "Split the Scrum Team into two smaller teams so they can deliver all 10 features."], correctAnswer: [1], explanation: { en: "The Scrum Guide states: 'No one else tells them how to turn Product Backlog items into Increments of value.' Only the Developers decide how much work they can complete.", zh: "Scrum Guide 明確指出：『沒有其他人可以指使他們如何將產品待辦項目轉化為增量。』只有開發團隊自己能決定能完成多少工作。" } },
    { id: 2, section: 1, question: "Who is accountable for maximizing the value of the product resulting from the work of the Scrum Team?", options: ["The Scrum Master.", "The Developers.", "The Product Owner.", "The stakeholders."], correctAnswer: [2], explanation: { en: "The Product Owner is accountable for maximizing the value of the product.", zh: "產品負責人負責極大化產品價值。" } },
    { id: 3, section: 1, question: "The Product Owner is accountable for which of the following? (Choose 3)", options: ["Developing the product roadmap.", "Ordering the items in the Product Backlog.", "Explaining Product Backlog items to the Developers.", "Ensuring the Product Backlog is transparent, clear and organized.", "Leading the Daily Scrum."], correctAnswer: [1, 2, 3], explanation: { en: "PO is accountable for ordering PB, explaining items, and ensuring transparency.", zh: "產品負責人負責排序、解釋和確保透明度。" } },
    { id: 4, section: 1, question: "There are no sub-teams or hierarchies in the Scrum Team. The entire Scrum Team commits to which of the following? (Choose 2)", options: ["The Definition of Done.", "The Product Goal.", "Individual task assignments.", "The work of creating the Increment.", "Sprint time-boxes."], correctAnswer: [1, 3], explanation: { en: "The Scrum Team commits to the Product Goal and the work of creating the Increment.", zh: "整個 Scrum 團隊共同承諾產品目標和創造增量的工作。" } },
    { id: 5, section: 1, question: "Who is responsible for ensuring Scrum is understood and enacted?", options: ["The Product Owner.", "The Developers.", "The Scrum Master.", "The project manager."], correctAnswer: [2], explanation: { en: "The Scrum Master is accountable for establishing Scrum as defined in the Scrum Guide.", zh: "Scrum Master 負責建立 Scrum 如 Scrum Guide 所定義。" } },
    { id: 6, section: 1, question: "The Product Owner can be described as:", options: ["A committee of stakeholders.", "One person, not a committee.", "The project manager of the development team.", "The team member who writes all the documentation."], correctAnswer: [1], explanation: { en: "The Scrum Guide clearly states: 'The Product Owner is one person, not a committee.'", zh: "Scrum Guide 明確指出：『產品負責人是個人，不是一個委員會。』" } },
    { id: 7, section: 1, question: "Which of the following best describes the Developers' commitment to the Definition of Done?", options: ["Only the code written by senior developers must meet the Definition of Done.", "The Definition of Done applies only to the current Sprint's work.", "If an Increment does not adhere to the Definition of Done, it cannot be released.", "The Product Owner can waive the Definition of Done for critical features."], correctAnswer: [2], explanation: { en: "If a product increment does not meet the Definition of Done, it cannot be released.", zh: "如果產品增量不符合完成定義，就不能發布。" } },
    { id: 8, section: 1, question: "When a new member joins an established Scrum Team, what is the best approach?", options: ["The Scrum Master should assign specific tasks to the new member.", "The Product Owner should prioritize tasks for the new member.", "The Scrum Team should self-manage and integrate the new member organically.", "The new member should work on a separate parallel Sprint."], correctAnswer: [2], explanation: { en: "Scrum Teams are self-managing. The team decides how to integrate new members.", zh: "Scrum 團隊是自我管理的。團隊決定如何整合新成員。" } },
    { id: 9, section: 1, question: "Which Scrum value is demonstrated when team members acknowledge mistakes and own their actions?", options: ["Commitment.", "Courage.", "Focus.", "Respect."], correctAnswer: [1], explanation: { en: "Courage means having the courage to do the right thing, including acknowledging mistakes.", zh: "勇氣意味著有勇氣做正確的事，包括承認錯誤。" } },
    { id: 10, section: 1, question: "The Scrum Team consists of which roles? (Choose 3)", options: ["Project Manager.", "Scrum Master.", "Product Owner.", "Developers.", "Team Lead."], correctAnswer: [1, 2, 3], explanation: { en: "The Scrum Team consists of Scrum Master, Product Owner, and Developers.", zh: "Scrum 團隊由 Scrum Master、產品負責人和開發團隊組成。" } },
    { id: 11, section: 1, question: "Who creates the Sprint Backlog?", options: ["The Product Owner.", "The Scrum Master.", "The Developers.", "Stakeholders."], correctAnswer: [2], explanation: { en: "The Developers are accountable for creating the Sprint Backlog.", zh: "開發團隊負責創建 Sprint 待辦清單。" } },
    { id: 12, section: 1, question: "If the Developers find they are unable to meet the Definition of Done, what should they do?", options: ["Lower the Definition of Done for this Sprint.", "Complete the work anyway and release it with known defects.", "Discuss it with the Product Owner to adjust the scope or seek help.", "Work overtime to meet the Definition of Done."], correctAnswer: [2], explanation: { en: "The Definition of Done cannot be lowered. Discuss with PO to adjust scope.", zh: "完成定義不能被降低。與產品負責人協商調整範圍。" } },
    { id: 13, section: 1, question: "Which of the following is TRUE about the Product Owner's authority?", options: ["The Product Owner can delegate the Product Backlog management to stakeholders.", "The Product Owner must be available to the Developers full-time.", "The Product Owner can have assistants, but one person is ultimately accountable.", "The Product Owner reports to the Development Manager."], correctAnswer: [2], explanation: { en: "The Product Owner may have assistants, but is one person ultimately accountable.", zh: "產品負責人可能有助手，但最終負責的是個人。" } },
    { id: 14, section: 1, question: "The Scrum Master serves the Developers by:", options: ["Assigning tasks to individual Developers.", "Protecting them from external interruptions and distractions.", "Making technical decisions on their behalf.", "Reporting their performance to management."], correctAnswer: [1], explanation: { en: "The Scrum Master protects the team from external interruptions and coaches self-management.", zh: "Scrum Master 保護團隊免受外部干擾並指導自我管理。" } },
    { id: 15, section: 1, question: "Which Scrum value involves focusing on the work of the Sprint and the goals of the Scrum Team?", options: ["Openness.", "Commitment.", "Focus.", "Respect."], correctAnswer: [2], explanation: { en: "Focus means the people involved in the Scrum Team focus on the work of the Sprint.", zh: "專注意味著 Scrum 團隊的成員專注於 Sprint 的工作。" } },
    { id: 16, section: 1, question: "Can the Product Owner write code or perform technical tasks as part of the Developers?", options: ["No, the Product Owner is a separate role.", "Yes, if the Product Owner has the technical skills.", "Only if approved by the Scrum Master.", "No, the Product Owner must focus solely on product strategy."], correctAnswer: [1], explanation: { en: "The Product Owner can be a member of the Developers if they have the necessary technical capabilities.", zh: "如果產品負責人具備必要的技術能力，可以成為開發團隊的成員。" } },
    { id: 17, section: 1, question: "What happens when the Scrum Team lacks skills to convert a Product Backlog item into a product Increment?", options: ["The Scrum Master hires contractors to complete the work.", "The Product Owner finds external resources to do the work.", "The Scrum Team works together to acquire or learn the needed skills, or the item is not worked on.", "The Sprint is canceled and restarted with new team members."], correctAnswer: [2], explanation: { en: "The Scrum Team is cross-functional and self-managing. They work together to acquire skills.", zh: "Scrum 團隊是跨職能且自我管理的。他們會共同努力獲取技能。" } },
    { id: 18, section: 1, question: "The Scrum Team is:", options: ["Multi-disciplinary with separate specialized roles.", "Cross-functional with all skills needed to create the Increment.", "Managed by a project manager who coordinates the work.", "Divided into sub-teams for development and testing."], correctAnswer: [1], explanation: { en: "The Scrum Team is cross-functional with all skills needed to create the Increment.", zh: "Scrum 團隊是跨職能的，擁有創造增量所需的所有技能。" } },
    { id: 19, section: 1, question: "Who is accountable for the adoption of Scrum within the Scrum Team?", options: ["The Product Owner.", "The Developers.", "The Scrum Master.", "Everyone on the Scrum Team."], correctAnswer: [2], explanation: { en: "The Scrum Master is accountable for ensuring Scrum is understood and enacted.", zh: "Scrum Master 負責確保 Scrum 被理解並實踐。" } },
    { id: 20, section: 1, question: "Which of the following best describes 'Respect' in Scrum?", options: ["Team members respect the Product Owner's decisions without question.", "Team members respect each other as capable, independent people.", "The Scrum Master is respected as the authority on Scrum.", "Stakeholders are respected by always delivering on time."], correctAnswer: [1], explanation: { en: "Respect means team members respect each other as capable, independent people.", zh: "尊重意味著團隊成員相互尊重，作為有能力、獨立的人。" } },
    { id: 21, section: 1, question: "Can a Scrum Team have more than one Product Owner?", options: ["Yes, for large products.", "Yes, if they divide the Product Backlog.", "No, there must be only one Product Owner for a product.", "Yes, but they must share the responsibilities equally."], correctAnswer: [2], explanation: { en: "There is only one Product Owner per product.", zh: "每個產品只有一位產品負責人。" } },
    { id: 22, section: 1, question: "The Scrum Master's role in Sprint Planning is to:", options: ["Present the product roadmap and gather requirements.", "Ensure the event takes place and participants are prepared, then facilitate as needed.", "Make the final decision on what can be completed in the Sprint.", "Document all commitments made during the planning."], correctAnswer: [1], explanation: { en: "The Scrum Master ensures the event takes place and participants are prepared.", zh: "Scrum Master 確保事件發生且參與者已準備好。" } },
    { id: 23, section: 1, question: "Which of the following is NOT a responsibility of the Developers?", options: ["Creating the Sprint Backlog.", "Ensuring the product meets the Definition of Done.", "Deciding how to structure the organization's budget.", "Instilling quality practices."], correctAnswer: [2], explanation: { en: "Structuring the organization's budget is not a Developer responsibility.", zh: "構建組織預算不是開發團隊的責任。" } },
    { id: 24, section: 1, question: "When new Impediments arise, who is primarily accountable for helping remove them?", options: ["The Product Owner.", "The Developers.", "The Scrum Master.", "The stakeholders."], correctAnswer: [2], explanation: { en: "The Scrum Master is accountable for removing impediments affecting progress.", zh: "Scrum Master 負責移除影響進展的障礙。" } },
    { id: 25, section: 1, question: "The five Scrum values are:", options: ["Commitment, Courage, Focus, Openness, Respect.", "Planning, Execution, Monitoring, Control, Closing.", "Analysis, Design, Development, Testing, Deployment.", "Speed, Quality, Quantity, Cost, Risk."], correctAnswer: [0], explanation: { en: "The five Scrum values are Commitment, Courage, Focus, Openness, and Respect.", zh: "五大 Scrum 價值觀是：承諾、勇氣、專注、開放、尊重。" } },
    { id: 26, section: 1, question: "Who decides how to distribute work among themselves within the Developers?", options: ["The Scrum Master assigns tasks based on expertise.", "The Product Owner prioritizes individual tasks.", "The Developers self-manage and decide together.", "Senior developers lead and assign work to junior developers."], correctAnswer: [2], explanation: { en: "The Developers are a self-managing team. They decide internally who does what.", zh: "開發團隊是自我管理的團隊。他們內部決定誰做什麼。" } },
    { id: 27, section: 1, question: "If a Developer believes the Product Backlog item they selected cannot be completed by the end of the Sprint, they should:", options: ["Work overtime without telling anyone.", "Immediately contact the Product Owner to discuss the situation.", "Blame the estimation done during Sprint Planning.", "Reduce the quality standards to finish on time."], correctAnswer: [1], explanation: { en: "Transparency and openness are key. Communicate early with the Product Owner.", zh: "透明度和開放性是關鍵。及早與產品負責人溝通。" } },
    { id: 28, section: 1, question: "The Scrum Team includes:", options: ["Developers, Product Owner, and Scrum Master.", "Developers, Product Owner, Scrum Master, and Project Manager.", "Developers, Product Owner, Scrum Master, and QA Engineers.", "Developers, Product Owner, Scrum Master, and Business Analysts."], correctAnswer: [0], explanation: { en: "The Scrum Team consists of Developers, Product Owner, and Scrum Master.", zh: "Scrum 團隊由開發團隊、產品負責人和 Scrum Master 組成。" } },
    { id: 29, section: 1, question: "Openness as a Scrum value means:", options: ["The Product Owner shares all product information with stakeholders openly.", "The Scrum Team and stakeholders are open about all work and challenges.", "All meetings are open to anyone in the organization.", "The Product Backlog is publicly accessible to anyone online."], correctAnswer: [1], explanation: { en: "Openness means the Scrum Team and stakeholders are open about work and challenges.", zh: "開放意味著 Scrum 團隊和利益相關者對工作和挑戰保持開放。" } },
    { id: 30, section: 1, question: "Who has the final say on the priority of Product Backlog items?", options: ["The Scrum Master, to ensure team harmony.", "The Developers, based on technical complexity.", "The Product Owner, as the sole person accountable for maximizing value.", "Stakeholders, through voting."], correctAnswer: [2], explanation: { en: "The Product Owner is solely responsible for managing the Product Backlog ordering.", zh: "產品負責人是管理產品待辦清單排序的唯一人員。" } },
    { id: 31, section: 2, question: "What is the maximum timebox for a one-month Sprint Planning event?", options: ["4 hours.", "8 hours.", "1 day.", "2 days."], correctAnswer: [1], explanation: { en: "Sprint Planning is timeboxed to a maximum of 8 hours for a one-month Sprint.", zh: "Sprint Planning 的時間限制為一個月 Sprint 最多 8 小時。" } },
    { id: 32, section: 2, question: "What is the purpose of the Daily Scrum?", options: ["To report progress to the Scrum Master.", "To inspect progress toward the Sprint Goal and adapt the Sprint Backlog as necessary.", "To assign tasks for the next 24 hours.", "To resolve all technical impediments."], correctAnswer: [1], explanation: { en: "The Daily Scrum is for inspecting progress toward the Sprint Goal and adapting the Sprint Backlog.", zh: "每日 Scrum 是用於檢查相對於 Sprint 目標的進度並調整 Sprint 待辦清單。" } },
    { id: 33, section: 2, question: "Who must attend the Daily Scrum?", options: ["The Scrum Master and Product Owner.", "The Developers.", "The Scrum Team and stakeholders.", "Any team member who has something to report."], correctAnswer: [1], explanation: { en: "The Daily Scrum is for the Developers. PO and SM attend only if working on Sprint Backlog items.", zh: "每日 Scrum 是開發團隊的活動。PO 和 SM 只有在從事 Sprint 待辦項目時才參加。" } },
    { id: 34, section: 2, question: "What is the timebox for a one-month Sprint Review?", options: ["1 hour.", "2 hours.", "4 hours.", "8 hours."], correctAnswer: [2], explanation: { en: "Sprint Review is timeboxed to a maximum of 4 hours for a one-month Sprint.", zh: "Sprint Review 的時間限制為一個月 Sprint 最多 4 小時。" } },
    { id: 35, section: 2, question: "What is the primary output of a Sprint Review?", options: ["A completed product release.", "An updated Definition of Done.", "A refined Product Backlog that defines probable items for the next Sprint.", "A retrospective action plan."], correctAnswer: [2], explanation: { en: "The primary output is a refined Product Backlog defining probable items for the next Sprint.", zh: "主要輸出是細化的產品待辦清單，定義下一個 Sprint 的可能項目。" } },
    { id: 36, section: 2, question: "What is the timebox for a one-month Sprint Retrospective?", options: ["30 minutes.", "1 hour.", "3 hours.", "4 hours."], correctAnswer: [2], explanation: { en: "Sprint Retrospective is timeboxed to a maximum of 3 hours for a one-month Sprint.", zh: "Sprint Retrospective 的時間限制為一個月 Sprint 最多 3 小時。" } },
    { id: 37, section: 2, question: "Which Scrum event occurs after the Sprint Review and before the next Sprint Planning?", options: ["Sprint Retrospective.", "A separate team building exercise.", "A technical workshop.", "A stakeholder feedback session."], correctAnswer: [0], explanation: { en: "The Sprint Retrospective occurs after the Sprint Review and before the next Sprint.", zh: "Sprint 回顧在 Sprint 審查之後、下一個 Sprint 之前發生。" } },
    { id: 38, section: 2, question: "Can a Sprint be canceled? If so, who has the authority to do so?", options: ["No, a Sprint cannot be canceled once it starts.", "Yes, the Scrum Master.", "Yes, the Product Owner.", "Yes, the stakeholders."], correctAnswer: [2], explanation: { en: "The Product Owner has the authority to cancel a Sprint if the Sprint Goal becomes obsolete.", zh: "如果 Sprint 目標變得過時，產品負責人有权取消 Sprint。" } },
    { id: 39, section: 2, question: "What are the three topics of Sprint Planning?", options: ["Scope, schedule, and budget.", "Why, What, and How.", "Plan, Execute, and Review.", "Goals, Tasks, and Responsibilities."], correctAnswer: [1], explanation: { en: "Sprint Planning addresses: Why is the Sprint valuable? What can be done? How will it get done?", zh: "Sprint Planning 涉及：Sprint 的價值是什麼？能完成什麼？如何完成？" } },
    { id: 40, section: 2, question: "During the Daily Scrum, the team identifies an impediment. Who is responsible for removing it?", options: ["The Developer who identified it.", "The Scrum Master.", "The Product Owner.", "The entire team resolves it during the Daily Scrum."], correctAnswer: [1], explanation: { en: "The Scrum Master is responsible for removing impediments. Daily Scrum is for inspection, not problem-solving.", zh: "Scrum Master 負責移除障礙。每日 Scrum 是用於檢驗，不是解決問題。" } },
    { id: 41, section: 2, question: "What is the purpose of the Sprint Goal?", options: ["To provide a task list for the Developers.", "To create a single objective that provides guidance to the Developers.", "To communicate the Sprint timeline to stakeholders.", "To serve as a contract between the PO and Developers."], correctAnswer: [1], explanation: { en: "The Sprint Goal provides a single objective that guides the Developers.", zh: "Sprint 目標提供單一目標，指導開發團隊。" } },
    { id: 42, section: 2, question: "If the Developers feel they are on track to not finish most of the Sprint Backlog items, what should they do?", options: ["Work through the weekend to catch up.", "Invite stakeholders to help with testing.", "Contact the Product Owner as soon as possible to discuss.", "Hide the issue and report partial completion."], correctAnswer: [2], explanation: { en: "Transparency is a core value. Contact the Product Owner ASAP to discuss options.", zh: "透明度是核心價值。盡快聯繫產品負責人討論選項。" } },
    { id: 43, section: 2, question: "Which of the following best describes the Sprint Retrospective?", options: ["A meeting to review the product features with stakeholders.", "A meeting for the team to inspect how the last Sprint went and plan improvements.", "A meeting to plan the next Sprint's work.", "A meeting to celebrate the team's achievements."], correctAnswer: [1], explanation: { en: "The Sprint Retrospective is for the team to inspect how the last Sprint went and plan improvements.", zh: "Sprint 回顧是讓團隊檢查上一個 Sprint 的表現並規劃改進。" } },
    { id: 44, section: 2, question: "How often should the Daily Scrum occur?", options: ["Twice a day.", "Every weekday morning.", "Daily at the same time and place.", "Whenever a team member has an update."], correctAnswer: [2], explanation: { en: "The Daily Scrum is held daily at the same time and place.", zh: "每日 Scrum 在每天的同一時間和地點舉行。" } },
    { id: 45, section: 2, question: "Who attends the Sprint Review?", options: ["The Scrum Team and key stakeholders.", "Only the Product Owner.", "The entire organization.", "Only the Developers."], correctAnswer: [0], explanation: { en: "The Sprint Review includes the Scrum Team and key stakeholders.", zh: "Sprint 審查包括 Scrum 團隊和關鍵利益相關者。" } },
    { id: 46, section: 2, question: "What is the maximum length of a Sprint?", options: ["1 week.", "2 weeks.", "4 weeks.", "8 weeks."], correctAnswer: [2], explanation: { en: "Sprints are between one and four calendar weeks in length.", zh: "Sprint 長度為 1 到 4 曆週。" } },
    { id: 47, section: 2, question: "Can the scope of a Sprint be modified once the Sprint has started?", options: ["Yes, by the Product Owner.", "Yes, by the Scrum Master.", "No, the Sprint scope cannot be changed to protect the Sprint Goal.", "Yes, if the majority of the Developers agree."], correctAnswer: [2], explanation: { en: "Once a Sprint has started, the Sprint Goal is fixed and scope cannot be changed to endanger it.", zh: "一旦 Sprint 開始，Sprint 目標就固定了，範圍不能改變以危及它。" } },
    { id: 48, section: 2, question: "What is the primary purpose of the Sprint Retrospective?", options: ["To plan the release date for the product.", "To increase quality and effectiveness by improving the elements of the Scrum framework.", "To review individual team member performance.", "To demonstrate the product to stakeholders."], correctAnswer: [1], explanation: { en: "The purpose is to plan ways to increase quality and effectiveness by improving Scrum elements.", zh: "目的是通過改進 Scrum 元素來增加品質和有效性。" } },
    { id: 49, section: 2, question: "Who creates the agenda for the Daily Scrum?", options: ["The Scrum Master.", "The Product Owner.", "The Developers decide for themselves.", "It follows a fixed template provided by the organization."], correctAnswer: [2], explanation: { en: "The Daily Scrum is a Developers event. They decide how to use the 15 minutes.", zh: "每日 Scrum 是開發團隊的事件。他們決定如何使用 15 分鐘。" } },
    { id: 50, section: 2, question: "When is the Product Backlog created?", options: ["After the Sprint Planning.", "Before development starts and it continues throughout the life of the product.", "During the Sprint Review.", "Only when the Developers ask for it."], correctAnswer: [1], explanation: { en: "The Product Backlog is created before development starts and continues throughout the product life.", zh: "產品待辦清單在開發開始前創建，並在產品生命週期中持續。" } },
    { id: 51, section: 2, question: "What happens immediately after Sprint Planning ends?", options: ["The Sprint Review begins.", "The Sprint begins.", "The team documents the plan and distributes it.", "The Scrum Master evaluates the team's plan."], correctAnswer: [1], explanation: { en: "The Sprint begins immediately after Sprint Planning.", zh: "Sprint 在 Sprint 規劃結束後立即開始。" } },
    { id: 52, section: 2, question: "The Scrum Master ensures that the Scrum Team adheres to Scrum theory and practice. How?", options: ["By enforcing strict rules and penalties.", "By serving the team and organization, leading and coaching.", "By writing all the documentation.", "By making technical decisions for the team."], correctAnswer: [1], explanation: { en: "The Scrum Master serves by leading and coaching others in Scrum theory and practice.", zh: "Scrum Master 透過領導和指導他人學習 Scrum 理論與實務來服務。" } },
    { id: 53, section: 2, question: "Which event is considered the official inspection gate for the Sprint?", options: ["Daily Scrum.", "Sprint Planning.", "Sprint Review.", "Sprint Retrospective."], correctAnswer: [2], explanation: { en: "The Sprint Review serves as the inspection gate where the Increment is inspected.", zh: "Sprint 審查作為官方的檢驗門戶，在那裡檢查增量。" } },
    { id: 54, section: 2, question: "What is the main output of the Sprint Planning?", options: ["A detailed Gantt chart.", "The Sprint Backlog, including Sprint Goal, selected items, and plan.", "A signed contract with stakeholders.", "Updated Definition of Done."], correctAnswer: [1], explanation: { en: "The main output is the Sprint Backlog, including Sprint Goal, selected PB items, and the plan.", zh: "主要輸出是 Sprint 待辦清單，包括 Sprint 目標、選定的 PB 項目和計劃。" } },
    { id: 55, section: 2, question: "If a Sprint is canceled, what happens to the completed Increments?", options: ["They are discarded and work must restart.", "They are reviewed and if they meet the DoD, they are accepted as an Increment.", "They automatically become the final product release.", "They require a new Sprint to be validated."], correctAnswer: [1], explanation: { en: "If a Sprint is canceled, completed Increments meeting DoD are accepted.", zh: "如果 Sprint 被取消，符合 DoD 的已完成增量會被接受。" } },
    { id: 56, section: 3, question: "Each Scrum Artifact has a related Commitment. Which pairing is correct?", options: ["Product Backlog — Sprint Goal.", "Sprint Backlog — Definition of Done.", "Increment — Product Goal.", "Product Backlog — Product Goal."], correctAnswer: [3], explanation: { en: "Correct pairings: Product Backlog/Product Goal, Sprint Backlog/Sprint Goal, Increment/Definition of Done.", zh: "正確配對：產品待辦清單/產品目標、Sprint 待辦清單/Sprint 目標、增量/完成定義。" } },
    { id: 57, section: 3, question: "What is the purpose of the Product Goal?", options: ["To describe the future state of the product.", "To list all features for the product.", "To define the Sprint objectives.", "To specify the Definition of Done."], correctAnswer: [0], explanation: { en: "The Product Goal describes a future state of the product.", zh: "產品目標描述了產品的未來狀態。" } },
    { id: 58, section: 3, question: "The Sprint Backlog is composed of which elements? (Choose 3)", options: ["The Sprint Goal.", "The entire Product Backlog.", "The set of Product Backlog items selected for the Sprint.", "The actionable plan for delivering the Increment.", "The Definition of Done."], correctAnswer: [0, 2, 3], explanation: { en: "Sprint Backlog = Sprint Goal + selected PB items + actionable plan.", zh: "Sprint 待辦清單 = Sprint 目標 + 選定的 PB 項目 + 可執行計劃。" } },
    { id: 59, section: 3, question: "Who is accountable for maintaining the Product Backlog?", options: ["The Developers.", "The Scrum Master.", "The Product Owner.", "The stakeholders."], correctAnswer: [2], explanation: { en: "The Product Owner is accountable for effective Product Backlog management.", zh: "產品負責人負責有效的產品待辦清單管理。" } },
    { id: 60, section: 3, question: "An Increment is:", options: ["The sum of all Product Backlog items completed during a Sprint.", "A documented plan describing how the product will be built.", "The final product delivered to the customer.", "A list of remaining features to be developed."], correctAnswer: [0], explanation: { en: "An Increment is a sum of all PB items completed during a Sprint and previous Sprints.", zh: "增量是一個 Sprint 和之前 Sprint 中完成的 PB 項目總和。" } },
    { id: 61, section: 3, question: "When must the Definition of Done be applied?", options: ["Only to items selected for the current Sprint.", "Only at the end of the product development.", "To every Increment that the Scrum Team produces.", "When the Product Owner requests it."], correctAnswer: [2], explanation: { en: "The Definition of Done is applied to every Increment, whenever and wherever produced.", zh: "完成定義適用於每個增量，無論何時何地生產。" } },
    { id: 62, section: 3, question: "What does it mean when the Product Backlog is described as 'emergent'?", options: ["It is created all at once at the beginning of the project.", "It is never complete; it evolves as the product and environment change.", "It emerges from the Daily Scrum meetings.", "It is created by stakeholders, not the Scrum Team."], correctAnswer: [1], explanation: { en: "The Product Backlog is never complete; it evolves as more is learned.", zh: "產品待辦清單永遠不完整；隨著了解更多而演變。" } },
    { id: 63, section: 3, question: "Who is accountable for creating an actionable plan for delivering the Increment during the Sprint?", options: ["The Product Owner.", "The Scrum Master.", "The Developers.", "The project manager."], correctAnswer: [2], explanation: { en: "The Developers create the Sprint Backlog including the actionable plan.", zh: "開發團隊創建包括可執行計劃的 Sprint 待辦清單。" } },
    { id: 64, section: 3, question: "If the Definition of Done is updated during a Sprint, what happens to Increments completed earlier?", options: ["They are not affected by the new Definition of Done.", "They must meet the new Definition of Done.", "Only new work must meet the new Definition of Done.", "The Product Owner decides which Increments are affected."], correctAnswer: [1], explanation: { en: "All Increments must meet the current Definition of Done, even those completed earlier.", zh: "所有增量必須符合當前的完成定義，即使是早期完成的。" } },
    { id: 65, section: 3, question: "The Product Backlog contains:", options: ["Only fully detailed items ready for development.", "A list of tasks for each team member.", "An emergent list of everything known about the product.", "Only the items selected for the current Sprint."], correctAnswer: [2], explanation: { en: "The Product Backlog is an emergent list of everything known about the product.", zh: "產品待辦清單是關於產品所知的一切的新興清單。" } },
    { id: 66, section: 3, question: "Which best describes the relationship between the Sprint Backlog and the Sprint Goal?", options: ["The Sprint Goal is separate from the Sprint Backlog.", "The Sprint Goal is part of the Sprint Backlog and provides direction.", "The Sprint Backlog replaces the need for a Sprint Goal.", "The Sprint Goal is created after the Sprint Backlog."], correctAnswer: [1], explanation: { en: "The Sprint Goal is part of the Sprint Backlog and provides direction for Developers.", zh: "Sprint 目標是 Sprint 待辦清單的一部分，為開發團隊提供方向。" } },
    { id: 67, section: 3, question: "Can there be more than one Increment per Sprint?", options: ["No, only one Increment per Sprint is allowed.", "Yes, but only if the Product Owner approves.", "Yes, a new Increment can be created anytime during the Sprint.", "Yes, but the total must equal one month of work."], correctAnswer: [2], explanation: { en: "There can be several Increments per Sprint as long as each meets the Definition of Done.", zh: "每個 Sprint 可以有幾個增量，只要每個都符合完成定義。" } },
    { id: 68, section: 3, question: "What is the primary basis for measuring progress?", options: ["Lines of code written.", "Hours worked.", "Completing items according to the Definition of Done.", "Number of meetings held."], correctAnswer: [2], explanation: { en: "Progress is measured by the creation of a Done Increment.", zh: "進展是通過創造完成的增量來衡量的。" } },
    { id: 69, section: 3, question: "Who decides how much work to pull into a Sprint from the Product Backlog?", options: ["The Product Owner.", "The Scrum Master.", "The Developers.", "Stakeholders vote."], correctAnswer: [2], explanation: { en: "The Developers decide how much work they can commit to during the Sprint.", zh: "開發團隊決定他們在 Sprint 期間能承諾多少工作。" } },
    { id: 70, section: 3, question: "The Product Backlog optimization includes which activities? (Choose 3)", options: ["Clarification.", "Deletion.", "Creation of new items.", "Fixed assignment to Sprints.", "Detailed estimation by SM."], correctAnswer: [0, 1, 2], explanation: { en: "PB optimization includes clarification, deletion, and creation of new items.", zh: "PB 優化包括澄清、刪除和創建新項目。" } },
    { id: 71, section: 3, question: "What is the minimum requirement for a Sprint to produce a result?", options: ["At least one Product Backlog item must be completed.", "At least one usable and potentially releasable Increment must be created.", "The Sprint Goal must be fully achieved.", "All items in the Sprint Backlog must be completed."], correctAnswer: [1], explanation: { en: "Every Sprint must produce at least one potentially releasable Increment.", zh: "每個 Sprint 必須至少產生一個潛在可發布的增量。" } },
    { id: 72, section: 3, question: "If a Product Backlog item does not meet the Definition of Done, what should happen?", options: ["It can be released with a note about known issues.", "It returns to the Product Backlog and can be reprioritized.", "The Scrum Master removes it from the Product Backlog.", "The Product Owner marks it as complete."], correctAnswer: [1], explanation: { en: "Items not meeting DoD return to the Product Backlog for future consideration.", zh: "不符合 DoD 的項目返回產品待辦清單以供未來考慮。" } },
    { id: 73, section: 3, question: "The Sprint Backlog is owned by:", options: ["The Product Owner.", "The Scrum Master.", "The Developers.", "The entire Scrum Team."], correctAnswer: [2], explanation: { en: "The Sprint Backlog is owned by the Developers. Only they can change it during a Sprint.", zh: "Sprint 待辦清單由開發團隊擁有。只有他們能在 Sprint 期間更改。" } },
    { id: 74, section: 3, question: "What is the purpose of ordering the Product Backlog?", options: ["To determine which team member does which task.", "To provide a clear plan for the next 6 months.", "To provide clarity and focus on what is most valuable to deliver next.", "To satisfy stakeholders' reporting requirements."], correctAnswer: [2], explanation: { en: "Ordering provides clarity and focus on what delivers the most value first.", zh: "排序提供清晰性和專注於首先交付最大價值的內容。" } },
    { id: 75, section: 3, question: "Which artifact shows work that is 'Done'?", options: ["Product Backlog.", "Sprint Backlog.", "Increment.", "Roadmap."], correctAnswer: [2], explanation: { en: "The Increment represents work that is Done according to the Definition of Done.", zh: "增量代表根據完成定義完成的 work。" } },
    { id: 76, section: 3, question: "What is the relationship between the Product Goal and the Product Backlog?", options: ["They are the same thing.", "The Product Goal describes a future state, and the Product Backlog contains items to reach it.", "The Product Backlog is created before the Product Goal exists.", "The Product Goal is derived from the Sprint Backlog."], correctAnswer: [1], explanation: { en: "The Product Goal describes a future state; the Product Backlog contains items to reach it.", zh: "產品目標描述未來狀態；產品待辦清單包含到達該狀態的項目。" } },
    { id: 77, section: 3, question: "When is the Product Backlog updated?", options: ["Only during Sprint Planning.", "Never, once the Sprint starts.", "It is a living document that is continuously refined.", "Only at the end of the product lifecycle."], correctAnswer: [2], explanation: { en: "The Product Backlog is a living document that is continuously refined.", zh: "產品待辦清單是一份持續細化的活躍文件。" } },
    { id: 78, section: 3, question: "What is the commitment for the Increment artifact?", options: ["Product Goal.", "Sprint Goal.", "Definition of Done.", "Release Plan."], correctAnswer: [2], explanation: { en: "The commitment for the Increment is the Definition of Done.", zh: "增量的承諾是完成定義。" } },
    { id: 79, section: 3, question: "What is the commitment for the Sprint Backlog artifact?", options: ["Product Goal.", "Sprint Goal.", "Definition of Done.", "Release Plan."], correctAnswer: [1], explanation: { en: "The commitment for the Sprint Backlog is the Sprint Goal.", zh: "Sprint 待辦清單的承諾是 Sprint 目標。" } },
    { id: 80, section: 3, question: "Can the Product Backlog be fully defined before the first Sprint?", options: ["Yes, this is recommended for better planning.", "No, it is emergent and will evolve as more is learned about the product.", "Yes, but only for large projects.", "No, it is created item by item during each Sprint."], correctAnswer: [1], explanation: { en: "The Product Backlog is emergent; it evolves as more is learned about the product and environment.", zh: "產品待辦清單是新興的；隨著對產品和環境了解更多而演變。" } },
    { id: 81, section: 4, question: "A key stakeholder approaches a Developer directly during a Sprint with a 'critical' request. What should the Developer do?", options: ["Implement the change immediately since it is 'critical'.", "Refuse to talk to the stakeholder.", "Direct the stakeholder to the Product Owner to discuss adding it to the Product Backlog.", "Tell the stakeholder it will be done in the next Sprint regardless."], correctAnswer: [2], explanation: { en: "All requests should go through the Product Owner who manages the Product Backlog.", zh: "所有請求應通過管理產品待辦清單的產品負責人。" } },
    { id: 82, section: 4, question: "The Scrum Team is halfway through a Sprint and realizes they will not meet the Sprint Goal. What is the best course of action?", options: ["Work overtime to catch up without telling anyone.", "Contact the Product Owner as soon as possible to discuss options.", "Reduce the Definition of Done to complete more items.", "Wait until the Sprint Review to inform stakeholders."], correctAnswer: [1], explanation: { en: "Transparency is key. Contact the Product Owner ASAP to discuss options.", zh: "透明度是關鍵。盡快聯繫產品負責人討論選項。" } },
    { id: 83, section: 4, question: "During the Sprint, the Product Owner wants to add a high-priority item. What should happen?", options: ["The Scrum Master adds it to the Sprint Backlog.", "The Product Owner can directly assign it to a Developer.", "The Product Owner discusses it with the Developers; they may swap items of equal value.", "The current Sprint is immediately canceled."], correctAnswer: [2], explanation: { en: "The PO and Developers collaborate. They may swap items of equal magnitude.", zh: "PO 和開發團隊協作。他們可能會交換同等大小的項目。" } },
    { id: 84, section: 4, question: "A Developer consistently arrives late to the Daily Scrum. What is the best approach for the Scrum Master?", options: ["Report the Developer to their functional manager.", "Coach the Developer on the purpose of the Daily Scrum and help them understand the impact.", "Exclude the late Developer from the Daily Scrum.", "Cancel the Daily Scrum to avoid delays."], correctAnswer: [1], explanation: { en: "The Scrum Master coaches team members in Scrum practice and helps them understand value.", zh: "Scrum Master 指導團隊成員 Scrum 實踐，幫助他們理解價值。" } },
    { id: 85, section: 4, question: "The organization wants to introduce Scrum across multiple teams. What is the best advice?", options: ["All teams should share one Product Owner.", "Each team should have its own Product Owner and Product Backlog.", "Start with a 6-month Sprint to allow for thorough planning.", "Combine all Developers into one large team."], correctAnswer: [1], explanation: { en: "Each Scrum Team should have its own Product Owner and Product Backlog.", zh: "每個 Scrum 團隊應該有自己的產品負責人和產品待辦清單。" } },
    { id: 86, section: 4, question: "The Scrum Team's Definition of Done includes 'code reviewed.' A Developer completes code but forgets the review. What should happen?", options: ["The item can be considered Done since the code is complete.", "The Scrum Master should review the code to save time.", "The item cannot be marked as Done; it must return to 'Doing' for review.", "The Product Owner can override the Definition of Done."], correctAnswer: [2], explanation: { en: "If an item does not meet the Definition of Done, it cannot be marked as Done.", zh: "如果項目不符合完成定義，就不能標記為完成。" } },
    { id: 87, section: 4, question: "A stakeholder asks the Scrum Master directly for a status report on the Sprint progress. What should the Scrum Master do?", options: ["Provide a detailed personal assessment of the team's performance.", "Direct the stakeholder to the Sprint Review and encourage them to attend.", "Lie and say everything is on track to avoid conflict.", "Create a Gantt chart showing individual task progress."], correctAnswer: [1], explanation: { en: "The Sprint Review is the official inspection point. Encourage stakeholders to attend.", zh: "Sprint 審查是官方的檢驗點。鼓勵利益相關者參加。" } },
    { id: 88, section: 4, question: "The Product Owner is unavailable during the Sprint, not responding to messages. What should the Developers do?", options: ["Make all decisions themselves without PO input.", "Continue working on the current Sprint Backlog and raise the impediment to the Scrum Master.", "Cancel the Sprint immediately.", "Contact the PO's manager directly."], correctAnswer: [1], explanation: { en: "The unavailability of the PO is an impediment. Continue work and inform the Scrum Master.", zh: "產品負責人的不可用是一個障礙。繼續工作並通知 Scrum Master。" } },
    { id: 89, section: 4, question: "Two Scrum Teams are working on the same product. How should they coordinate on the Product Backlog?", options: ["Each team maintains a separate Product Backlog.", "There is one Product Backlog managed by one Product Owner.", "The Scrum Masters coordinate the Product Backlog together.", "Stakeholders decide which items each team works on."], correctAnswer: [1], explanation: { en: "There is only one Product Backlog for a product, managed by one Product Owner.", zh: "一個產品只有一個產品待辦清單，由一位產品負責人管理。" } },
    { id: 90, section: 4, question: "During Sprint Retrospective, the team identifies that unclear requirements are causing delays. What is the best improvement action?", options: ["Add 'requirement review session' before Sprint Planning.", "Blame the Product Owner for poor documentation.", "Extend the Sprint to accommodate the delays.", "Reduce the Definition of Done."], correctAnswer: [0], explanation: { en: "Adding a requirement review session before Sprint Planning helps clarify items before commitment.", zh: "在 Sprint 規劃前添加需求審查會議有助於在承諾前澄清項目。" } },
    { id: 91, section: 4, question: "A new Scrum Team has never worked together. When should they start collaborating on the first Sprint?", options: ["After a 2-week orientation period.", "Immediately; the first Sprint Planning is the start of their collaboration.", "After the Product Owner trains them on the product.", "After the Scrum Master certifies them."], correctAnswer: [1], explanation: { en: "Scrum Teams form and immediately begin their first Sprint.", zh: "Scrum 團隊形成後立即開始第一個 Sprint。" } },
    { id: 92, section: 4, question: "The Developers estimate they can complete 40 story points, but the Product Owner wants 60 points delivered. What happens?", options: ["The Developers work on the full 60 points to please the Product Owner.", "The Product Owner forces all 60 items into the Sprint.", "The Developers and Product Owner collaborate; the Sprint Backlog reflects what Developers believe they can complete.", "The Scrum Master chooses how many points to include."], correctAnswer: [2], explanation: { en: "The Developers decide how much work they can complete. Collaboration with PO is key.", zh: "開發團隊決定他們能完成多少工作。與 PO 的協作是關鍵。" } },
    { id: 93, section: 4, question: "Which of the following scenarios violates Scrum principles?", options: ["The Product Owner reorders the Product Backlog between Sprints.", "The Scrum Master facilitates a Sprint Retrospective.", "The project manager assigns tasks to Developers during the Sprint.", "The Developers add technical tasks to the Sprint Backlog."], correctAnswer: [2], explanation: { en: "Scrum has no project manager role, and tasks should not be assigned by anyone.", zh: "Scrum 沒有專案經理角色，任務不應該由任何人指派。" } },
    { id: 94, section: 4, question: "A team has been running Sprints for 3 months. The Product Owner wants to change Sprint length from 2 weeks to 3 weeks. Is this allowed?", options: ["No, Sprints must always be 2 weeks.", "Yes, but only with stakeholder approval.", "Yes, Sprints can be 1-4 weeks, but the length should remain consistent.", "No, changing Sprint length breaks the Scrum framework."], correctAnswer: [2], explanation: { en: "Sprints can be 1-4 weeks, but once set, the length should remain consistent.", zh: "Sprint 可以是 1-4 週，但一旦設定，長度應保持一致。" } },
    { id: 95, section: 4, question: "The Scrum Team is struggling with the Daily Scrum taking 30+ minutes. What is the best intervention?", options: ["The Scrum Master takes over facilitation of the Daily Scrum.", "The Product Owner joins to keep things moving.", "Coach the Developers to keep the Daily Scrum focused on the Sprint Goal, within 15 minutes.", "Cancel the Daily Scrum and replace with email updates."], correctAnswer: [2], explanation: { en: "The Daily Scrum is timeboxed to 15 minutes. Coach the Developers to keep it focused.", zh: "每日 Scrum 限制為 15 分鐘。指導開發團隊保持專注。" } },
    { id: 96, section: 4, question: "Which statement about the Definition of Done is TRUE?", options: ["Each Scrum Team must have a Definition of Done.", "The Definition of Done is optional for new teams.", "Only the Developers create the Definition of Done.", "The Definition of Done can be different for each Sprint."], correctAnswer: [0], explanation: { en: "Every Scrum Team must have a Definition of Done.", zh: "每個 Scrum 團隊都必須有完成定義。" } },
    { id: 97, section: 4, question: "During Sprint Planning, the Developers realize they don't have enough information about a Product Backlog item. What should they do?", options: ["Proceed with assumptions and start coding.", "Ask the Product Owner to clarify or split the item before committing.", "Skip the item and work on something else.", "Tell the Product Owner the Sprint cannot start."], correctAnswer: [1], explanation: { en: "The Developers should ask the PO to clarify or split the item before committing.", zh: "開發團隊應在承諾前要求 PO 澄清或拆分項目。" } },
    { id: 98, section: 4, question: "A Scrum Team of 15 Developers is working on one product. What is the best recommendation?", options: ["Keep the team as is; larger teams are more productive.", "Split into multiple smaller Scrum Teams, each with their own Product Owner.", "Split into multiple smaller Scrum Teams sharing one Product Owner and Product Backlog.", "Add more Sprints to reduce workload."], correctAnswer: [2], explanation: { en: "For large teams, split into multiple Scrum Teams sharing one Product Owner and Product Backlog.", zh: "對於大型團隊，拆分為多個共享一位產品負責人和產品待辦清單的 Scrum 團隊。" } },
    { id: 99, section: 4, question: "The Scrum Master notices the Product Owner is ordering the Product Backlog based on stakeholder pressure rather than value. What should the Scrum Master do?", options: ["Reorder the Product Backlog themselves.", "Coach the Product Owner on maximizing value and managing stakeholder expectations.", "Ignore it; the Product Owner knows best.", "Tell the stakeholders to communicate directly with the Developers."], correctAnswer: [1], explanation: { en: "The Scrum Master serves the Product Owner by coaching them on maximizing value.", zh: "Scrum Master 通過指導產品負責人極大化價值來服務他們。" } },
    { id: 100, section: 4, question: "Which of the following is the BEST description of why Scrum is used?", options: ["It provides a detailed prescription for how to build products.", "It is a lightweight framework that allows teams to optimize for predictability and control creativity.", "It ensures that all stakeholders approve of the product before development starts.", "It eliminates the need for documentation and planning."], correctAnswer: [1], explanation: { en: "Scrum is a lightweight framework to optimize predictability and facilitate creativity, value, and functionality.", zh: "Scrum 是一個輕量框架，用於優化可預測性並促進創意、價值和功能。" } }
];

// ===== 工具函數 =====
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// ===== 進度管理 =====
function getProgress() {
    try { return JSON.parse(localStorage.getItem('psm_progress')) || createNewProgress(); } catch (e) { return createNewProgress(); }
}

function createNewProgress() {
    return { totalAnswered: 0, correct: 0, sectionProgress: { 1: { attempted: 0, correct: 0 }, 2: { attempted: 0, correct: 0 }, 3: { attempted: 0, correct: 0 }, 4: { attempted: 0, correct: 0 } }, questionHistory: {}, examHistory: [], weakQuestions: {} };
}

function saveProgress(progress) { localStorage.setItem('psm_progress', JSON.stringify(progress)); }

function recordAnswer(sectionId, questionId, isCorrect) {
    const progress = getProgress();
    progress.totalAnswered = (progress.totalAnswered || 0) + 1;
    if (isCorrect) progress.correct = (progress.correct || 0) + 1;
    if (!progress.sectionProgress[sectionId]) progress.sectionProgress[sectionId] = { attempted: 0, correct: 0 };
    progress.sectionProgress[sectionId].attempted++;
    if (isCorrect) progress.sectionProgress[sectionId].correct++;
    if (!progress.questionHistory[questionId]) progress.questionHistory[questionId] = { attempted: 0, correct: 0 };
    progress.questionHistory[questionId].attempted++;
    if (isCorrect) progress.questionHistory[questionId].correct++;
    const q = progress.questionHistory[questionId];
    if ((q.attempted - q.correct) >= 2) progress.weakQuestions[questionId] = (progress.weakQuestions[questionId] || 0) + 1;
    else delete progress.weakQuestions[questionId];
    saveProgress(progress);
    updateSidebarStats();
}

function updateSidebarStats() {
    const stats = getProgress();
    const totalAnswered = stats.totalAnswered || 0;
    const correct = stats.correct || 0;
    const accuracy = totalAnswered > 0 ? Math.round((correct / totalAnswered) * 100) : 0;
    const totalEl = document.getElementById('total-answered');
    const accuracyEl = document.getElementById('accuracy-rate');
    if (totalEl) totalEl.textContent = totalAnswered;
    if (accuracyEl) accuracyEl.textContent = accuracy + '%';
}

// ===== 測驗功能 =====
let currentQuizQuestions = [];
// currentQuestionIndex is already declared in app.js - reuse it
let correctCount = 0;
let wrongCount = 0;
let answeredQuestions = {};

function startQuiz(sectionId) {
    currentQuizQuestions = sectionId === 0 ? [...questionBank] : questionBank.filter(q => q.section === sectionId);
    currentQuizQuestions = shuffleArray(currentQuizQuestions);
    currentQuestionIndex = 0;
    correctCount = 0;
    wrongCount = 0;
    answeredQuestions = {};
    document.getElementById('quizSelector').style.display = 'none';
    document.getElementById('quizArea').style.display = 'block';
    document.getElementById('totalQuestions').textContent = currentQuizQuestions.length;
    displayQuestion();
}

function displayQuestion() {
    const q = currentQuizQuestions[currentQuestionIndex];
    const container = document.getElementById('questionContainer');
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
    document.getElementById('correctCount').textContent = correctCount;
    document.getElementById('wrongCount').textContent = wrongCount;
    const isAnswered = answeredQuestions[q.id];
    let optionsHtml = '';
    q.options.forEach((opt, idx) => {
        let className = 'option';
        if (isAnswered) {
            if (q.correctAnswer.includes(idx)) className += ' correct';
            else if (idx === isAnswered.selected && !q.correctAnswer.includes(idx)) className += ' wrong';
        }
        optionsHtml += `<div class="${className}" onclick="selectAnswer(${idx})" ${isAnswered ? 'style="pointer-events:none"' : ''}><span class="option-letter">${String.fromCharCode(65 + idx)}</span><span class="option-text">${opt}</span></div>`;
    });
    container.innerHTML = `<div class="question-badge">第 ${q.id} 題</div><h3 class="question-text">${q.question}</h3><div class="options-container">${optionsHtml}</div>${isAnswered ? `<div class="explanation-box"><strong>📖 Explanation:</strong><p class="en-text">${q.explanation.en}</p><p class="zh-text">${q.explanation.zh}</p></div>` : ''}`;
    document.getElementById('prevBtn').disabled = currentQuestionIndex === 0;
    document.getElementById('nextBtn').textContent = currentQuestionIndex === currentQuizQuestions.length - 1 ? '完成測驗' : '下一題';
}

function selectAnswer(optionIdx) {
    const q = currentQuizQuestions[currentQuestionIndex];
    if (answeredQuestions[q.id]) return;
    const isCorrect = q.correctAnswer.includes(optionIdx);
    answeredQuestions[q.id] = { selected: optionIdx, isCorrect };
    if (isCorrect) { correctCount++; recordAnswer(q.section, q.id, true); }
    else { wrongCount++; recordAnswer(q.section, q.id, false); }
    displayQuestion();
}

function prevQuestion() { if (currentQuestionIndex > 0) { currentQuestionIndex--; displayQuestion(); } }

function nextQuestion() {
    if (!answeredQuestions[currentQuizQuestions[currentQuestionIndex].id]) { alert('請先選擇一個答案！'); return; }
    if (currentQuestionIndex < currentQuizQuestions.length - 1) { currentQuestionIndex++; displayQuestion(); }
    else showQuizResult();
}

function showQuizResult() {
    const total = correctCount + wrongCount;
    const percentage = total > 0 ? Math.round((correctCount / total) * 100) : 0;
    const passed = percentage >= 85;
    const container = document.getElementById('questionContainer');
    container.innerHTML = `<div class="result-card ${passed ? 'passed' : 'failed'}"><h2>${passed ? '🎉 恭喜通過！' : '😔 未通過'}</h2><div class="result-score">${percentage}%</div><p>答對 ${correctCount} / 總 ${total} 題</p><p>需要 85% 答對率才能通過 PSM I 考試</p><button class="btn btn-primary" onclick="resetQuiz()">重新練習</button></div>`;
    document.getElementById('prevBtn').style.display = 'none';
    document.getElementById('nextBtn').style.display = 'none';
}

function resetQuiz() {
    document.getElementById('quizSelector').style.display = 'block';
    document.getElementById('quizArea').style.display = 'none';
    document.getElementById('prevBtn').style.display = '';
    document.getElementById('nextBtn').style.display = '';
    currentQuizQuestions = [];
    answeredQuestions = {};
}

// ===== 模擬考試功能 =====
let examQuestions = [];
let examAnswered = {};
let examTimer = null;
let examTimeLeft = 0;

function startExam() {
    const range = document.getElementById('examRange')?.value || 'all';
    const timerVal = parseInt(document.getElementById('examTimer')?.value || '60');
    if (range === 'all') { examQuestions = shuffleArray([...questionBank]); }
    else {
        const sectionMap = { section1: 1, section2: 2, section3: 3, section4: 4 };
        examQuestions = shuffleArray(questionBank.filter(q => q.section === sectionMap[range]));
    }
    examAnswered = {};
    examTimeLeft = timerVal * 60;
    document.getElementById('examSetup').style.display = 'none';
    document.getElementById('examArea').style.display = 'block';
    const navGrid = document.getElementById('questionNavGrid');
    navGrid.innerHTML = '';
    examQuestions.forEach((q, idx) => {
        const btn = document.createElement('button');
        btn.className = 'nav-dot';
        btn.textContent = idx + 1;
        btn.onclick = () => goToExamQuestion(idx);
        navGrid.appendChild(btn);
    });
    startExamTimer();
    displayExamQuestion(0);
}

function displayExamQuestion(idx) {
    const q = examQuestions[idx];
    const container = document.getElementById('examQuestionContainer');
    const isAnswered = examAnswered[q.id];
    let optionsHtml = '';
    q.options.forEach((opt, optIdx) => {
        let className = 'option';
        if (isAnswered && isAnswered.includes(optIdx)) className += ' correct';
        optionsHtml += `<div class="${className}" onclick="toggleExamAnswer(${idx}, ${optIdx})"><span class="option-letter">${String.fromCharCode(65 + optIdx)}</span><span class="option-text">${opt}</span></div>`;
    });
    container.innerHTML = `<div class="question-nav-top"><button onclick="prevExamQuestion()" ${idx === 0 ? 'disabled' : ''}>← 上一題</button><span>第 ${idx + 1} / ${examQuestions.length} 題</span><button onclick="nextExamQuestion()" ${idx === examQuestions.length - 1 ? 'disabled' : ''}>下一題 →</button></div><div class="question-badge">第 ${q.id} 題</div><h3 class="question-text">${q.question}</h3><div class="options-container">${optionsHtml}</div>${isAnswered ? `<div class="explanation-box"><strong>📖 Explanation:</strong><p class="en-text">${q.explanation.en}</p><p class="zh-text">${q.explanation.zh}</p></div>` : ''}`;
    const dots = document.querySelectorAll('.nav-dot');
    dots.forEach((dot, i) => { dot.className = 'nav-dot' + (examAnswered[examQuestions[i].id] ? ' answered' : ''); });
}

function toggleExamAnswer(qIdx, optIdx) {
    const q = examQuestions[qIdx];
    if (!examAnswered[q.id]) examAnswered[q.id] = [];
    const arr = examAnswered[q.id];
    const pos = arr.indexOf(optIdx);
    if (pos >= 0) { arr.splice(pos, 1); if (arr.length === 0) delete examAnswered[q.id]; }
    else { arr.push(optIdx); }
    displayExamQuestion(qIdx);
    updateNavDots();
}

function updateNavDots() {
    const dots = document.querySelectorAll('.nav-dot');
    dots.forEach((dot, i) => { dot.className = 'nav-dot' + (examAnswered[examQuestions[i].id] ? ' answered' : ''); });
}

function prevExamQuestion() { const ci = getCurrentExamQuestionIndex(); if (ci > 0) displayExamQuestion(ci - 1); }
function nextExamQuestion() { const ci = getCurrentExamQuestionIndex(); if (ci < examQuestions.length - 1) displayExamQuestion(ci + 1); }

function getCurrentExamQuestionIndex() {
    const container = document.getElementById('examQuestionContainer');
    const badge = container?.querySelector('.question-badge');
    if (!badge) return 0;
    const qId = parseInt(badge.textContent.match(/第 (\d+) 題/)?.[1] || '1');
    return examQuestions.findIndex(q => q.id === qId);
}

function goToExamQuestion(idx) { displayExamQuestion(idx); }

function startExamTimer() {
    if (examTimer) clearInterval(examTimer);
    const timerDisplay = document.getElementById('examTimerDisplay');
    examTimer = setInterval(() => {
        examTimeLeft--;
        const minutes = Math.floor(examTimeLeft / 60);
        const seconds = examTimeLeft % 60;
        if (timerDisplay) timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        if (examTimeLeft <= 0) { clearInterval(examTimer); submitExam(); }
    }, 1000);
}

function submitExam() {
    if (examTimer) clearInterval(examTimer);
    let correct = 0;
    examQuestions.forEach(q => {
        const ans = examAnswered[q.id];
        if (ans && q.correctAnswer.every(a => ans.includes(a)) && ans.every(a => q.correctAnswer.includes(a)) && ans.length === q.correctAnswer.length) correct++;
    });
    const total = examQuestions.length;
    const percentage = Math.round((correct / total) * 100);
    const passed = percentage >= 85;
    const progress = getProgress();
    if (!progress.examHistory) progress.examHistory = [];
    progress.examHistory.push({ date: new Date().toLocaleDateString('zh-TW'), score: percentage, correct: correct, total: total });
    saveProgress(progress);
    document.getElementById('examArea').style.display = 'none';
    document.getElementById('examResult').style.display = 'block';
    document.getElementById('examResultContent').innerHTML = `<div class="result-card ${passed ? 'passed' : 'failed'}"><h2>${passed ? '🎉 恭喜通過模擬考！' : '😔 未通過，繼續加油！'}</h2><div class="result-score">${percentage}%</div><p>答對 ${correct} / 總 ${total} 題</p><p>PSM I 考試需要 85% 答對率才能通過</p><p>距離及格還差 ${Math.max(0, 85 - percentage)}%</p><button class="btn btn-primary" onclick="resetExam()">再次挑戰</button></div>`;
}

function resetExam() {
    document.getElementById('examSetup').style.display = 'block';
    document.getElementById('examArea').style.display = 'none';
    document.getElementById('examResult').style.display = 'none';
    examQuestions = [];
    examAnswered = {};
}

// ===== 進度頁面功能 =====
function loadProgressPage() {
    const progress = getProgress();
    const totalAnswered = progress.totalAnswered || 0;
    const correct = progress.correct || 0;
    const accuracy = totalAnswered > 0 ? Math.round((correct / totalAnswered) * 100) : 0;
    const statTotalEl = document.getElementById('statTotalAnswered');
    const statCorrectEl = document.getElementById('statCorrect');
    const statAccuracyEl = document.getElementById('statAccuracy');
    const statExamEl = document.getElementById('statExamScore');
    if (statTotalEl) statTotalEl.textContent = totalAnswered;
    if (statCorrectEl) statCorrectEl.textContent = correct;
    if (statAccuracyEl) statAccuracyEl.textContent = accuracy + '%';
    const exams = progress.examHistory || [];
    if (exams.length > 0 && statExamEl) statExamEl.textContent = Math.max(...exams.map(e => e.score || 0)) + '%';
    updateSectionCharts(progress);
    updateExamHistory(progress);
    updateWeakQuestions(progress);
}

function updateSectionCharts(progress) {
    const sectionNames = ['三大角色篇', '五大事件篇', '三大產出物篇', '綜合情境題'];
    const sectionTotals = [30, 25, 25, 20];
    const progressChart = document.getElementById('sectionProgressChart');
    if (progressChart) {
        let html = '';
        for (let i = 1; i <= 4; i++) {
            const sp = progress.sectionProgress[i] || { attempted: 0, correct: 0 };
            const pct = sectionTotals[i - 1] > 0 ? Math.round((sp.attempted / sectionTotals[i - 1]) * 100) : 0;
            html += `<div class="chart-bar"><div class="bar-label">${sectionNames[i - 1]}</div><div class="bar-fill" style="width:${pct}%">${sp.attempted}/${sectionTotals[i - 1]}</div></div>`;
        }
        progressChart.innerHTML = html;
    }
}

function updateExamHistory(progress) {
    const historyList = document.getElementById('examHistoryList');
    if (historyList) {
        const exams = progress.examHistory || [];
        if (exams.length === 0) { historyList.innerHTML = '<p>尚無考試記錄</p>'; }
        else {
            let html = '<ul>';
            exams.slice(-5).reverse().forEach(e => {
                const passed = e.score >= 85;
                html += `<li class="${passed ? 'passed' : 'failed'}">${e.date}: ${e.score}% (${e.correct}/${e.total}) ${passed ? '✓' : '✗'}</li>`;
            });
            html += '</ul>';
            historyList.innerHTML = html;
        }
    }
}

function updateWeakQuestions(progress) {
    const weakList = document.getElementById('weakQuestionsList');
    if (weakList) {
        const weakQs = Object.entries(progress.weakQuestions || {}).filter(([k, v]) => v >= 2);
        if (weakQs.length === 0) {
            weakList.innerHTML = '<p>目前沒有弱項題目，繼續保持！</p>';
        } else {
            let html = '<ul>';
            weakQs.forEach(([qId]) => {
                const q = questionBank.find(x => x.id === parseInt(qId));
                if (q) html += `<li>第 ${q.id} 題 - ${q.question.substring(0, 80)}...</li>`;
            });
            html += '</ul>';
            weakList.innerHTML = html;
        }
    }
}

function retryWeakQuestions() {
    const progress = getProgress();
    const weakIds = Object.keys(progress.weakQuestions || {}).filter(k => progress.weakQuestions[k] >= 2);
    if (weakIds.length === 0) { alert('目前沒有弱項題目需要先練！'); return; }
    currentQuizQuestions = questionBank.filter(q => weakIds.includes(String(q.id)));
    currentQuizQuestions = shuffleArray(currentQuizQuestions);
    currentQuestionIndex = 0;
    correctCount = 0;
    wrongCount = 0;
    answeredQuestions = {};
    window.location.href = 'quiz.html';
}

function clearProgress() {
    if (confirm('確定要清除所有學習進度嗎？此操作無法復原。')) {
        localStorage.removeItem('psm_progress');
        window.location.reload();
    }
}

// ===== 頁面初始化 =====
document.addEventListener('DOMContentLoaded', function() {
    updateSidebarStats();
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage === 'progress.html' || currentPage === '') loadProgressPage();
    if (currentPage === 'mock_exam.html') document.getElementById('examSetup').style.display = 'block';
});
