export class Announcement {
    id?: number | string;
    title?: string;
    content?: string;
    status?: string | number | boolean;
    startDatetime?: string;
    endDatetime?: string;
    description?: string;
}

export const defaultAnnouncement: Announcement = {
    id: 0,
    title: '',
    content: '',
    description: '',
    status: false,
    startDatetime: '',
    endDatetime: '',
};
