import {Service} from 'typedi';
import {HttpClient} from '@/api/axios/http.client';
import {Ghost} from '@/types';

@Service()
export class GhostApi {
    private domain = 'ghosts';

    constructor(private httpClient: HttpClient) {}

    public async getByPage(page: number): Promise<Ghost[]> {
        return await this. httpClient.call<Ghost[]>('GET', `${this.domain}?page=${page}`);
    }
}
